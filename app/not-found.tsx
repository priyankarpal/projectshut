import Link from 'next/link';

export default function NotFound() {
    return (
        <section>
            <div className="relative overflow-hidden">
                <div className="pt-40 pb-48">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <section className="sm:max-w-xl md:max-w-2xl tab:max-w-3xl lg:max-w-4xl">
                            <p className="text-4xl font-bold sm:text-[5vw] md:text-5xl lg:leading-[5.5rem] lg:text-[4rem] text-white">
                                Oh no! It seems like you&apos;ve taken a wrong turn.
                            </p>
                            <p className="mt-4 text-xl text-gray-400 tracking-wide ">
                                Don&apos;t worry, though! Navigate to <Link href="/" className="text-primary">homepage</Link>.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}