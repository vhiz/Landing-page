import Toggle from "./Toggle";

export default function Loading() {
  return (
    <section className="flex items-center justify-center">
      <div className="hidden">
        <Toggle />
      </div>

      <span className="loading loading-dots loading-lg"></span>
    </section>
  );
}
