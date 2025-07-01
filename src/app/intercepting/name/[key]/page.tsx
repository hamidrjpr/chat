export default function NamePage({ params }: { params: { key: string } }) {
  return <div>{params.key}</div>;
}
