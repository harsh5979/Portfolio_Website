const releaseSteps = [
  {
    title: 'Check the change',
    description: 'I run the build and the checks that cover the change before shipping it.',
  },
  {
    title: 'Update the service',
    description: 'I use Docker Compose to update the containers for that app. For Vatchit, I wait for active calls to finish before restarting the voice service.',
  },
  {
    title: 'Verify the release',
    description: 'I check service health on the server, then open the public site or test the route affected by the change.',
  },
];

export function DevOps() {
  return (
    <section id="devops" className="scroll-mt-24 border-t border-border bg-surface/50 py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[1fr_1.4fr] md:gap-12 md:px-8">
        <div>
          <h2 className="portfolio-display text-4xl text-text-primary md:text-5xl">How I ship</h2>
          <p className="mt-4 max-w-sm leading-relaxed text-text-secondary">
            I keep deployment steps small so I can check what changed and spot a problem quickly.
          </p>
        </div>
        <ol className="divide-y divide-border border-y border-border">
          {releaseSteps.map((step, index) => (
            <li key={step.title} className="grid grid-cols-[2rem_1fr] gap-3 py-4">
              <span className="text-sm tabular-nums text-text-muted" aria-hidden="true">{index + 1}.</span>
              <div>
                <h3 className="font-semibold text-text-primary">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
