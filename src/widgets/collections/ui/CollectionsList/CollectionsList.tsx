import React from 'react';
import {collectionsList} from "~/widgets/collections/model/collectionsLinks";
import {CollectionCard} from "~/widgets/collections/ui/CollectionCard";

const CollectionsList = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-6 lg:grid-cols-4">
      {collectionsList.map((item) => (
        <CollectionCard key={item.category} {...item} />
      ))}
    </div>
  );
};

export default CollectionsList;