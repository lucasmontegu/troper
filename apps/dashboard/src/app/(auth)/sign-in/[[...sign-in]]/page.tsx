"use client"

import React from "react";
import PageWrapper from "@/components/Container/page-wrapper";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <PageWrapper >
            <div className="flex min-w-screen justify-center my-[5rem]">
                <SignIn />
            </div>
        </PageWrapper>
    );
}