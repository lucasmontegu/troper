import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@troper/ui/components/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from "@troper/ui/components/dropdown-menu"
import { SignOutButton, useUser } from "@clerk/nextjs"
import Link from "next/link"
import { Icons } from "@/components/icons"

export function Profile() {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
      <DropdownMenu>
          <DropdownMenuTrigger asChild className="w-[2.25rem] h-[2.25rem]">
              <Avatar >
                  <AvatarImage src={user?.imageUrl} alt="User Profile" />
                  <AvatarFallback></AvatarFallback>
              </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                  <Link href="/dashboard/user-profile">
                      <DropdownMenuItem>
                          <Icons.user className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>
                  </Link>
                  <Link href="/dashboard/settings">
                      <DropdownMenuItem>
                          <Icons.settings className="mr-2 h-4 w-4" />
                          <span>Settings</span>
                          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                      </DropdownMenuItem>
                  </Link>
              </DropdownMenuGroup>
              <SignOutButton>
                  <DropdownMenuItem>
                      <Icons.logOut
                       className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
              </SignOutButton>
          </DropdownMenuContent>
      </DropdownMenu>
  )
}