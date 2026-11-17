import Image from "next/image";

/** Brand logo badge that sits on the corner of photos (About sections). */
export function LogoStamp() {
  return (
    <div className="about-stamp">
      <Image src="/images/logo.webp" alt="AC Service Vizag – One Call for All Electrical Repairs" width={700} height={167} sizes="220px" />
    </div>
  );
}
