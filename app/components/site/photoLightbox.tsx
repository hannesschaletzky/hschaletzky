import { useRef, type ReactNode } from "react";

type Photo = { src: string; width: number; height: number; alt: string };

// a small trigger (thumbnail or text) that opens the photo large in a native
// dialog: Esc, the close button or a click next to the photo closes it
export default function PhotoLightbox({
  photo,
  label,
  closeLabel = "Schließen",
  className = "",
  children,
}: {
  photo: Photo;
  // what screen readers hear on the trigger, e.g. "Foto vergrößern"
  label: string;
  closeLabel?: string;
  className?: string;
  children: ReactNode;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        type="button"
        aria-label={label}
        onClick={() => dialog.current?.showModal()}
        className={`cursor-zoom-in ${className}`}
      >
        {children}
      </button>
      {/* Esc closes the dialog natively, the click only adds closing by the backdrop */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <dialog
        ref={dialog}
        aria-label={photo.alt}
        // a click on the dialog itself (not the photo) is a click on the backdrop
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        className="m-auto max-h-[90vh] max-w-[min(90vw,64rem)] overflow-visible bg-transparent p-0 backdrop:bg-navy/85 backdrop:backdrop-blur-sm"
      >
        <img
          src={photo.src}
          width={photo.width}
          height={photo.height}
          alt={photo.alt}
          className="max-h-[85vh] w-auto rounded-2xl shadow-2xl"
        />
        <button
          type="button"
          onClick={() => dialog.current?.close()}
          aria-label={closeLabel}
          className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-navy shadow-lg hover:bg-teal-light"
        >
          ×
        </button>
      </dialog>
    </>
  );
}
