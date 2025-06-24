export function WorkFlowEngineFeatureSharedFormProcessMaker({
  url,
}: {
  url: any;
}) {
  return (
    <div className="h-full">
      <iframe
        className="h-full w-full"
        // width="f"
        // height="315"
        src={url}
        // frameborder="0"
      ></iframe>
    </div>
  );
}

export default WorkFlowEngineFeatureSharedFormProcessMaker;
