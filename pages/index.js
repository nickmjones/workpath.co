import Head from 'next/head'
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>workpath.co</title>
      </Head>
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <a href="#">Test link</a>
      <p>
        Mollit laboris nisi exercitation est elit nostrud eiusmod esse et est
        velit proident. Adipisicing ut nisi Lorem reprehenderit reprehenderit
        nulla consequat consequat ea consectetur ex. Quis laborum eiusmod anim
        cillum ex do nulla duis ad sunt proident dolore veniam. Labore enim
        nulla duis occaecat occaecat Lorem eiusmod enim sit adipisicing. Elit
        duis minim ut ea ipsum nulla consequat id duis.
      </p>
      <p>
        Ullamco eu et commodo nulla aute nisi mollit ullamco Lorem duis velit
        elit exercitation qui. Quis in veniam tempor duis. Ad in deserunt
        commodo cupidatat aliqua excepteur ipsum consectetur ullamco officia
        enim. Reprehenderit <a href="#">mollit aliquip Lorem</a> qui duis sit ad
        nisi aute minim esse exercitation culpa. Ea ut anim proident dolore
        consectetur ut consequat. Anim sunt exercitation veniam deserunt.
      </p>
    </Layout>
  );
}
