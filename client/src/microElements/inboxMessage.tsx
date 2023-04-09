function InboxMessage({ id }: { id: number }) {
  if (id === 1)
    return (
      <h5 className="font-bold tablet:text-base text-xl">Upload A New Song</h5>
    );

  if (id === 2)
    return (
      <h5 className="font-bold tablet:text-base text-xl">
        Started Following You
      </h5>
    );

  if (id === 3)
    return (
      <h5 className="font-bold tablet:text-base text-xl">Likes Your Song</h5>
    );

  return (
    <h5 className="font-bold tablet:text-base text-xl">
      Commented on Your Song
    </h5>
  );
}

export default InboxMessage;
