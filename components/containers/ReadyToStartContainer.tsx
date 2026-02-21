import ReadyButtons from '../buttons/ReadyButtons';

export default function ReadyToStartContainer() {
  return (
    <div className="flex flex-col px-40 py-20 justify-center items-center text-center gap-5 bg-accent">
      <h1 className="font-bold text-4xl text-app-background">
        Ready to Start Your Project?
      </h1>
      <p className="text-sm text-app-background mt-2">
        Contact us today for a free quotation or give us a call on the number
        below to find our exactly what you need to start your dream today.
      </p>
      <ReadyButtons />
    </div>
  );
}
