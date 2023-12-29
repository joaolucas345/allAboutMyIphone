import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"
   
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
      } from "@/components/ui/command"
import { useState } from "react"
   
  function FullCommand({ tips }) {
    const [open, setOpen] = useState(null)
    const [isSearching, setIsSearching] = useState(false)
    return (
        <div onClick={(e) => e.stopPropagation()}>
      <Command className="rounded-lg border shadow-md w-96">
        <CommandInput  onChangeCapture={(e) => {
            setIsSearching(e.target.value != '')
        }}  placeholder="Search a tip..." />
        <CommandList>
          <CommandEmpty >No results found.</CommandEmpty>
          <CommandSeparator  />
          <CommandGroup heading="Settings">
            {
                tips.map((tip,i) => (
                    <CommandItem className={`${isSearching ? "visible" : "hidden"} outline-none mt-2`} key={`${tip.Question}-${i}`} onClickCapture={(e) => {
                        setOpen(tip)
                    }} >
                        <div className="min-w-min min-h-min">
                        <svg width="15" className="mr-2" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 11.0001V4.00006L1 4.00006L1 11.0001H14ZM15 4.00006V11.0001C15 11.5523 14.5523 12.0001 14 12.0001H1C0.447715 12.0001 0 11.5523 0 11.0001V4.00006C0 3.44778 0.447715 3.00006 1 3.00006H14C14.5523 3.00006 15 3.44778 15 4.00006ZM2 5.25C2 5.11193 2.11193 5 2.25 5H5.75C5.88807 5 6 5.11193 6 5.25V9.75C6 9.88807 5.88807 10 5.75 10H2.25C2.11193 10 2 9.88807 2 9.75V5.25ZM7.5 7C7.22386 7 7 7.22386 7 7.5C7 7.77614 7.22386 8 7.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H7.5ZM7 9.5C7 9.22386 7.22386 9 7.5 9H12.5C12.7761 9 13 9.22386 13 9.5C13 9.77614 12.7761 10 12.5 10H7.5C7.22386 10 7 9.77614 7 9.5ZM7.5 5C7.22386 5 7 5.22386 7 5.5C7 5.77614 7.22386 6 7.5 6H11.5C11.7761 6 12 5.77614 12 5.5C12 5.22386 11.7761 5 11.5 5H7.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                        </div>
                      <span >{tip.Question}</span>
                    </CommandItem>
                ))
            }
          </CommandGroup>
        </CommandList>
        <AlertDialog open={open != null}>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>{open ? open.Question : ''}</AlertDialogTitle>
            <AlertDialogDescription>
                {open ? open.Answer : ''}
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogAction onClickCapture={() => {
                setOpen(null)
            }} >Close</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
      </Command>
      </div>
    )
  }
  
  
  export {
    FullCommand
  }