export default function FacebookIcon({ className }: { className?: string }) {
  return (
    <div className="border-secondaryBlue group hover:bg-primaryBlue hover:border-primaryBlue relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border transition">
      <a
        href="#"
        className={`absolute top-1/2 left-1/2 flex h-12 w-12 -translate-1/2 transform items-center justify-center rounded-full ${className}`}
        aria-label="Follow us on Facebook"
        target="_blank"
        rel="noopener noreferrer"
      ></a>

      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        fill="currentColor"
        className="text-primaryBlue w-2 transition group-hover:text-white"
      >
        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
      </svg>
    </div>
  );
}
