export function WorkFlowEngineFeatureInboxProcessMaker({
  dataInbox,
  urltest,
}: {
  dataInbox: any;
  urltest: any;
}) {
  return (
    <div className="h-full">
      <iframe
        className="h-full w-full"
        // width="f"
        // height="315"
        src={urltest}
        // frameborder="0"
      ></iframe>
    </div>
  );
}

export default WorkFlowEngineFeatureInboxProcessMaker;
