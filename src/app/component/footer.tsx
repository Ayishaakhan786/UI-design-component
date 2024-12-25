export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4 sm:px-16 font-sans tracking-wide">
      <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left flex-wrap gap-4">
        <p className="text-[15px] leading-loose">
          © AK SoftTech. All rights reserved.
        </p>
        <ul className="flex flex-col sm:flex-row space-x-0 sm:space-x-6 gap-y-2 sm:gap-y-0 sm:justify-start justify-center">
          <li>
            <a href="javascript:void(0)" className="text-[15px] hover:text-white">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="text-[15px] hover:text-white">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}