import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function DELETE(req, context) {
  const params = context?.params;
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return new Response(JSON.stringify({ message: "Yetkisiz erişim" }), { status: 401 });
  }

  const userId = parseInt(params?.id);
  if (isNaN(userId)) {
    return new Response(JSON.stringify({ message: "Geçersiz kullanıcı ID" }), { status: 400 });
  }

  if (session.user.id === userId) {
    return new Response(JSON.stringify({ message: "Kendi hesabınızı silemezsiniz" }), { status: 400 });
  }

  try {
    const targetUser = await prisma.user.findUnique({ where: { id: userId } });
    if (!targetUser) {
      return new Response(JSON.stringify({ message: "Kullanıcı bulunamadı" }), { status: 404 });
    }

    if (targetUser.role === "admin") {
      return new Response(JSON.stringify({ message: "Admin kullanıcı silinemez" }), { status: 403 });
    }

    await prisma.directMessage.deleteMany({ where: { senderId: userId } });
    await prisma.forumMessage.deleteMany({ where: { userId: userId } });
    await prisma.orderItem.deleteMany({
      where: {
        order: {
          email: targetUser.email
        }
      }
    });
    await prisma.order.deleteMany({ where: { email: targetUser.email } });

    const deletedUser = await prisma.user.delete({ where: { id: userId } });

    return new Response(
      JSON.stringify({ message: "Kullanıcı ve ilişkili verileri silindi", user: deletedUser }),
      { status: 200 }
    );

  } catch (error) {
    console.error("Silme hatası:", error);
    return new Response(
      JSON.stringify({ message: "Kullanıcı silinemedi", error: error.message }),
      { status: 500 }
    );
  }
}
