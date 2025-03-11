import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Filter } from "lucide-react";

function FilterCoursesMobile({ children }) {
    return (
        <div className='lg:hidden'>
            <Sheet>
                <SheetTrigger>
                    <Filter className='h-6 w-6' />
                </SheetTrigger>
                <SheetContent side='left'>
                    <SheetHeader>
                        <SheetTitle className='text-left'>
                            Filter Courses
                        </SheetTitle>
                        {children}
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
}

export default FilterCoursesMobile;
