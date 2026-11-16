import Image from "next/image";

/** Brand logo badge that sits on the corner of photos (About sections). */
export function LogoStamp() {
  return (
    <div className="about-stamp">
      <Image src="/images/rk-logo.webp" alt="RK Cool Tech Services – Your Comfort, Our Priority" width={700} height={238} sizes="190px" />
    </div>
  );
}
