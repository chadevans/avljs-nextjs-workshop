import Link from 'next/link';

type ButtonProps = {
  cta: string;
  url: string;
};

export function Button({ cta, url }: ButtonProps) {
  return (
    <>
      <Link href={url}>
        <button type="button" className="rounded-md bg-indigo-500 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-400">
          {cta}
        </button>
      </Link>
    </>
  )
}