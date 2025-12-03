import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShoppingCart } from "lucide-react"
import { Plus } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MySheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingCart  />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>
            Add your favourite products here and checkout for payment.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-2 px-4">
          <MyItem/>
           <MyItem/>
        </div>  
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

function MyItem() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline" className="p-2 h-20">
        <ItemMedia variant="image" className="self-stretch h-15 w-15">
          <img src="https://www.wisden.com/static-assets/waf-images/41/79/bf/16-9/MExunEu2qL.jpg?v=23.07&w=1920" alt="" className="w-full h-full" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Evil Rabbit</ItemTitle>
          <ItemDescription>Last seen 5 months ago</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button
            size="icon-sm"
            variant="outline"
            className="rounded-full"
            aria-label="Invite"
          >
            <Plus />
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}
