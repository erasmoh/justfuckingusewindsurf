export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        {/* Hero */}
        <h1 className="mb-8 text-5xl font-black leading-tight tracking-tight md:text-7xl">
          Just Fucking Use Windsurf
        </h1>
        
        <p className="mb-8 text-lg leading-relaxed text-zinc-300 md:text-xl">
          You probably think you need to stick with VS Code. You&apos;re over here installing 47 extensions 
          because some blog said &quot;customize your workflow.&quot; You&apos;re considering Cursor because you heard 
          it has AI. You&apos;re using fucking Copilot and pretending it understands your codebase. 
          Well guess what, dipshit:
        </p>

        <h2 className="mb-6 text-3xl font-bold text-emerald-400 md:text-4xl">
          You just need Windsurf.
        </h2>
        
        <p className="mb-12 text-lg leading-relaxed text-zinc-300 md:text-xl">
          That&apos;s it. That&apos;s the fucking answer. Stop Googling &quot;best AI code editor 2024&quot; for the 
          47th time. Stop asking on Reddit if Cursor is worth it. Stop pretending you need 15 different 
          tools when one does it all.
        </p>

        {/* Why Section */}
        <h3 className="mb-6 text-2xl font-bold md:text-3xl">
          Here&apos;s why, motherfucker:
        </h3>
        
        <ul className="mb-12 space-y-3 text-lg text-zinc-300">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400">•</span>
            <span>It actually understands your entire codebase, not just the file you&apos;re looking at</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400">•</span>
            <span>Cascade AI writes code that actually fucking works in context</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400">•</span>
            <span>It runs terminal commands, creates files, and debugs for you</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400">•</span>
            <span>Built on VS Code so all your precious extensions still work</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400">•</span>
            <span>Multi-file edits without copy-pasting like a caveman</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400">•</span>
            <span>It has a free tier, you cheap bastard</span>
          </li>
        </ul>

        {/* But I need... sections */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-rose-400 md:text-3xl">
            &quot;But I&apos;m already using Cursor!&quot;
          </h2>
          <p className="text-lg leading-relaxed text-zinc-300">
            Cool, enjoy your rate limits and paying $20/month for an AI that forgets what you told it 
            5 messages ago. Windsurf&apos;s Cascade actually maintains context across your entire session. 
            It remembers your project structure. It knows what you&apos;re trying to build. But sure, 
            keep explaining your codebase to Cursor every 10 minutes.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-rose-400 md:text-3xl">
            &quot;But VS Code + Copilot is fine!&quot;
          </h2>
          <p className="text-lg leading-relaxed text-zinc-300">
            &quot;Fine&quot; is just another word for &quot;I don&apos;t know what I&apos;m missing.&quot; Copilot autocompletes 
            single lines. Windsurf refactors entire features. Copilot suggests code. Windsurf 
            understands intent, writes tests, fixes bugs, and explains what it did. It&apos;s like 
            comparing a calculator to a mathematician.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-rose-400 md:text-3xl">
            &quot;But I like my current setup!&quot;
          </h2>
          <p className="text-lg leading-relaxed text-zinc-300">
            You know what you&apos;ll like more? Actually shipping code instead of configuring your 
            editor. Your &quot;setup&quot; is 47 extensions, 3 config files, and a prayer. Windsurf works 
            out of the box. Import your VS Code settings and extensions in one click. Stop being 
            a tool hipster.
          </p>
        </section>

        {/* What Windsurf Actually Does */}
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">
          What Windsurf Actually Does
        </h2>
        
        <div className="mb-12 space-y-4 text-lg text-zinc-300">
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <span className="font-bold text-white">Cascade AI:</span> An agentic AI that actually 
            does shit for you. <span className="text-emerald-400">Just fucking use Cascade.</span>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <span className="font-bold text-white">Codebase Understanding:</span> Indexes your 
            entire project so AI knows what&apos;s going on. <span className="text-emerald-400">Just fucking use it.</span>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <span className="font-bold text-white">Multi-file Editing:</span> Changes multiple 
            files in one go without breaking everything. <span className="text-emerald-400">Just fucking use it.</span>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <span className="font-bold text-white">Terminal Integration:</span> AI runs commands 
            and fixes errors automatically. <span className="text-emerald-400">Just fucking use it.</span>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <span className="font-bold text-white">Context Memory:</span> Remembers what you&apos;re 
            working on across the entire session. <span className="text-emerald-400">Just fucking use it.</span>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <span className="font-bold text-white">VS Code Compatible:</span> All your extensions 
            and keybindings work. <span className="text-emerald-400">Just fucking switch.</span>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <span className="font-bold text-white">Flows:</span> Automated workflows for repetitive 
            tasks. <span className="text-emerald-400">Just fucking automate it.</span>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <span className="font-bold text-white">Free Tier:</span> Actually usable without 
            paying. <span className="text-emerald-400">Just fucking try it.</span>
          </div>
        </div>

        {/* Stop Over-Engineering */}
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">
          Stop Over-Engineering Your Dev Setup
        </h2>
        <p className="mb-12 text-lg leading-relaxed text-zinc-300">
          You don&apos;t need VS Code + Copilot + ChatGPT in a browser + Claude in another tab + 
          Stack Overflow + documentation open + a rubber duck. You need one fucking tool: 
          Windsurf. It does all of that. Use Windsurf. Stop cargo-culting tool choices from 
          developers who have different problems than you.
        </p>

        {/* Satire disclaimer */}
        <section className="mb-12 rounded-lg border border-zinc-700 bg-zinc-900/30 p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-400">
            Yes, This is Satire (Kind Of)
          </h2>
          <p className="text-zinc-400">
            Look, there ARE legitimate reasons to use other editors. If you&apos;re doing embedded 
            systems, maybe you need a specialized IDE. If you&apos;re a Vim purist who types at 
            200 WPM, godspeed. If your company mandates a specific tool, that sucks.
          </p>
          <p className="mt-4 text-zinc-400">
            But for 95% of developers, Windsurf is the right choice. It&apos;s the sensible default 
            for AI-assisted development. Start with Windsurf. Only move away from it when you 
            have a SPECIFIC, MEASURED reason to do so. Not because it&apos;s trendy. Not because 
            you read a tweet. Because you actually need something it can&apos;t do.
          </p>
          <p className="mt-4 font-bold text-white">
            Until then: Just. Fucking. Use. Windsurf.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://erasmoh.dev/windsurf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-emerald-500 px-8 py-4 text-xl font-bold text-black transition-colors hover:bg-emerald-400"
          >
            Download Windsurf →
          </a>
          <p className="mt-3 text-sm text-zinc-400">
            Using the link above gives us both credits 🙏
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            Made by{" "}
            <a 
              href="https://twitter.com/erasmohernandez" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 underline hover:text-white"
            >
              @erasmohernandez
            </a>
            {" "}— Windsurf Ambassador 🌎
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            Inspired by{" "}
            <a 
              href="https://www.justfuckingusepostgres.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 underline hover:text-white"
            >
              Just Fucking Use Postgres
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
