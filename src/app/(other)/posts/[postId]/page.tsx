import { Metadata } from "next";

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostPageProps = {
  params: Promise<{ postId: string }>;
};

async function getPost(id: string): Promise<Post> {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) throw new Error(`Ошибка ответа сервера: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(`Не удалось получить данные:`, error);
    throw error;
  }
}
export const generateMetadata = async ({
  params,
}: PostPageProps): Promise<Metadata> => {
  const { postId } = await params;
  const post = await getPost(postId);

  return {
    title: `${post.title} | My Blog`,
    description: post.body.slice(0, 160),
  };
};
export default async function PostPage({ params }: PostPageProps) {
  const { postId } = await params;

  const post = await getPost(postId);

  return (
    <div>
      <h1 className="text-2xl">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
