"use client";

import { UserProfile } from "@clerk/nextjs";

import PageWrapper from "@/components/Container/page-wrapper";

const UserProfilePage = () => {
  return (
    <PageWrapper>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <UserProfile path="/user-profile" routing="path" />
      </div>
    </PageWrapper>
  );
};

export default UserProfilePage;
