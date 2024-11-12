import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Hey, I'm Sainath. I've been a software developer since 2020 and have been creating websites since 2018. This is my place on the internet to share whatever I want.`}
        <br />
        <br />
        {`At present I am working as a Faculty at Youngstown State University.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
