/** @jsx h */
import { h } from "preact";
import Counter from "../islands/Counter.tsx";
import sass from "https://deno.land/x/denosass@1.0.4/mod.ts";

const compiler = sass(`
    >.sect1 {
  background-color:red;      
    }
`);

export default function Home() {
  return (
    <div>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <div class="sect1">
        
        <img
        src="/img11.png"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      </div>
      <p>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh haha.
      </p>
      <Counter start={1} />
    </div>
  );
}
