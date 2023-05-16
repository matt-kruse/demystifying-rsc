'use client';
import {useRouter} from "next/navigation";

function Component() {
  const router = useRouter();
  return (
      <button onClick={() => router.refresh()}>router.refresh()</button>
  )
}

export default Component;