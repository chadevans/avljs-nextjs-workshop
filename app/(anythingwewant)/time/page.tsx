type Time = {
  datetime: string;
}

async function getTimeCached(): Promise<Time> {
  const res = await fetch('http://worldtimeapi.org/api/timezone/America/New_York',
    // { cache: 'no-store' }
    { next: { revalidate: 5 }} // 5 seconds
  );
  const data: Time = await res.json();
  return data;
}

async function getTimeNow(): Promise<Time> {
  const res = await fetch('http://worldtimeapi.org/api/timezone/America/New_York',
    { cache: 'no-store' }
  );
  const data: Time = await res.json();
  return data;
}

export default async function Page() {
  const timeNow: Time = await getTimeNow();
  const timeCached: Time = await getTimeCached();

  return (
    <>
      <h1 className="text-3xl">Time now: {timeNow.datetime}</h1>
      <h1 className="text-3xl">Time cached: {timeCached.datetime}</h1>
    </>
  )
}