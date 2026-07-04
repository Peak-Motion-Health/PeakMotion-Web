export default function Mission() {
  return (
    <section
      id="mission"
      className="bg-white py-32"
    >
      <div className="mx-auto max-w-6xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-[#0D8B6F]">
            Our Mission
          </span>

          <h2 className="mt-8 text-5xl font-bold tracking-tight text-slate-900">
            We believe home exercise programs should start with
            <span className="text-[#0D8B6F]">
              {" "}clinical reasoning
            </span>
            , not exercise searches.
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            PeakMotion was created around the way rehabilitation professionals
            actually think. Instead of searching for individual exercises,
            clinicians begin with a patient's diagnosis, impairments,
            functional limitations, and goals. From there, PeakMotion helps
            build individualized home exercise programs in seconds.
          </p>
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-2">

          <div className="rounded-3xl border border-red-100 bg-red-50 p-10">

            <h3 className="mb-8 text-3xl font-bold text-red-600">
              Traditional Workflow
            </h3>

            <div className="space-y-5 text-lg">

              <WorkflowItem text="Know the exercise name" />
              <WorkflowItem text="Search the library" />
              <WorkflowItem text="Scroll through hundreds of exercises" />
              <WorkflowItem text="Repeat for every patient" />

            </div>

          </div>

          <div className="rounded-3xl bg-[#0D8B6F] p-10 text-white">

            <h3 className="mb-8 text-3xl font-bold">
              PeakMotion Workflow
            </h3>

            <div className="space-y-5 text-lg">

              <WorkflowItemDark text="Diagnosis" />
              <WorkflowItemDark text="Impairments" />
              <WorkflowItemDark text="Function" />
              <WorkflowItemDark text="Patient Goals" />
              <WorkflowItemDark text="Recommended HEP" />

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

function WorkflowItem({ text }: { text: string }) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      {text}
    </div>
  )
}

function WorkflowItemDark({ text }: { text: string }) {
  return (
    <div className="rounded-xl bg-white/10 p-5">
      ✓ {text}
    </div>
  )
}