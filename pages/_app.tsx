import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div className="font-suite">
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="max-w-lg w-full">
            <RecoilRoot>
              <Component {...pageProps} />
            </RecoilRoot>
          </div>
        </div>
      </div>
    </div>
  );
}
