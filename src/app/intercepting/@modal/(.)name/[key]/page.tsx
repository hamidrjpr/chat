export default async function ModalPage({
  params,
}: {
  params: { key: string };
}) {
  return (
    <div className="fixed w-[200px] h-[200px] bg-white rounded-lg top-/12 left-1/2 -translate-1/2">
      <div className="flex w-full h-full items-center justify-center">
        {params.key}
      </div>
    </div>
  );
}
