import { Drawer } from "@mui/material";
import {
    DrawersTemporary,
    DrawersSwipeableTemporary,
    DrawersSwipeableEdge,
    DrawersResponsive,
    DrawersPersistentLeft,
    DrawersPersistentRight,
    DrawersMini,
    DrawersPermanentLeft,
    DrawersPermanentRight,
    DrawersClipped
} from "../components/drawer-component";


export default {
    title: 'Navigation/Drawer',
    component: Drawer,
    argTypes: {
        variant: {
            options: ["temporary", "permanent"],
            control: { type: "radio" },
        }
    },
};

const DrawersTemporaryTemplate = (args) => <DrawersTemporary {...args}></DrawersTemporary>
export const DrawerTemporary = DrawersTemporaryTemplate.bind({});
DrawerTemporary.args = {
    hideBackdrop: false,
    variant: "temporary",
    elevation: 16,
};
const DrawersSwipeableTemporaryTemplate = (args) => <DrawersSwipeableTemporary {...args}></DrawersSwipeableTemporary>
export const DrawerTemporarySwipeable = DrawersSwipeableTemporaryTemplate.bind({});
DrawerTemporarySwipeable.args = {
    disableBackdropTransition: false,
    disableDiscovery: false,
    label: "Open",
    elevation: 16,
};
const DrawersSwipeableEdgeTemplate = (args) => <DrawersSwipeableEdge {...args}></DrawersSwipeableEdge>
export const DrawerEdgeSwipeable = DrawersSwipeableEdgeTemplate.bind({});
DrawerEdgeSwipeable.args = {
    label: "Open",
    elevation: 16,
    disableBackdropTransition: false,
    disableDiscovery: false,

};

const DrawersResponsiveTemplate = (args) => <DrawersResponsive {...args}></DrawersResponsive>
export const DrawerResponsive = DrawersResponsiveTemplate.bind({});
DrawerResponsive.args = {
    header: "Responsive drawer",
    data:
        [{ content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Rhoncus dolor purus non enim praesent elementum facilisis leo vel.Risus at ultrices mi tempus imperdiet.Semper risus in hendrerit gravida rutrum quisque non tellus.Convallis convallis tellus id interdum velit laoreet id donec ultrices.Odio morbi quis commodo odio aenean sed adipiscing.Amet nisl suscipit adipiscing bibendum est ultricies integer quis.Cursus euismod quis viverra nibh cras.Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.Mauris commodo quis imperdiet massa tincidunt.Cras tincidunt lobortis feugiat vivamus at augue.At augue eget arcu dictum varius duis atconsectetur lorem.Velit sed ullamcorper morbi tincidunt.Lorem donec massa sapien faucibus et molestie ac." },
        { content: "Consequat mauris nunc congue nisi vitae suscipit.Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam.Pulvinar elementum integer enim neque volutpat ac tincidunt.Ornare suspendisse sed nisi lacus sed viverra tellus.Purus sit amet volutpat consequat mauris.Elementum eu facilisis sed odio morbi.Euismod lacinia at quis risus sed vulputate odio.Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.In hendrerit gravida rutrum quisque non tellus orci ac.Pellentesque nec nam aliquam sem et tortor.Habitant morbi tristique senectus et.Adipiscing elit duis tristique sollicitudin nibh sit.Ornare aenean euismod elementum nisi quis eleifend.Commodo viverra maecenas accumsan lacus vel facilisis.Nulla posuere sollicitudin aliquam ultrices sagittis orci a." }],
    elevation: 16,

}
const DrawersPersistentLeftTemplate = (args) => <DrawersPersistentLeft {...args}></DrawersPersistentLeft>
export const DrawerLeftPersistent = DrawersPersistentLeftTemplate.bind({});
DrawerLeftPersistent.args = {
    header: "Persistent drawer",
    data:
        [{ content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Rhoncus dolor purus non enim praesent elementum facilisis leo vel.Risus at ultrices mi tempus imperdiet.Semper risus in hendrerit gravida rutrum quisque non tellus.Convallis convallis tellus id interdum velit laoreet id donec ultrices.Odio morbi quis commodo odio aenean sed adipiscing.Amet nisl suscipit adipiscing bibendum est ultricies integer quis.Cursus euismod quis viverra nibh cras.Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.Mauris commodo quis imperdiet massa tincidunt.Cras tincidunt lobortis feugiat vivamus at augue.At augue eget arcu dictum varius duis atconsectetur lorem.Velit sed ullamcorper morbi tincidunt.Lorem donec massa sapien faucibus et molestie ac." },
        { content: "Consequat mauris nunc congue nisi vitae suscipit.Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam.Pulvinar elementum integer enim neque volutpat ac tincidunt.Ornare suspendisse sed nisi lacus sed viverra tellus.Purus sit amet volutpat consequat mauris.Elementum eu facilisis sed odio morbi.Euismod lacinia at quis risus sed vulputate odio.Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.In hendrerit gravida rutrum quisque non tellus orci ac.Pellentesque nec nam aliquam sem et tortor.Habitant morbi tristique senectus et.Adipiscing elit duis tristique sollicitudin nibh sit.Ornare aenean euismod elementum nisi quis eleifend.Commodo viverra maecenas accumsan lacus vel facilisis.Nulla posuere sollicitudin aliquam ultrices sagittis orci a." }],

}
const DrawersPersistentRightTemplate = (args) => <DrawersPersistentRight {...args}></DrawersPersistentRight>
export const DrawerRightPersistent = DrawersPersistentRightTemplate.bind({});
DrawerRightPersistent.args = {
    header: " Persistent drawer",
    data:
        [{ content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Rhoncus dolor purus non enim praesent elementum facilisis leo vel.Risus at ultrices mi tempus imperdiet.Semper risus in hendrerit gravida rutrum quisque non tellus.Convallis convallis tellus id interdum velit laoreet id donec ultrices.Odio morbi quis commodo odio aenean sed adipiscing.Amet nisl suscipit adipiscing bibendum est ultricies integer quis.Cursus euismod quis viverra nibh cras.Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.Mauris commodo quis imperdiet massa tincidunt.Cras tincidunt lobortis feugiat vivamus at augue.At augue eget arcu dictum varius duis atconsectetur lorem.Velit sed ullamcorper morbi tincidunt.Lorem donec massa sapien faucibus et molestie ac." },
        { content: "Consequat mauris nunc congue nisi vitae suscipit.Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam.Pulvinar elementum integer enim neque volutpat ac tincidunt.Ornare suspendisse sed nisi lacus sed viverra tellus.Purus sit amet volutpat consequat mauris.Elementum eu facilisis sed odio morbi.Euismod lacinia at quis risus sed vulputate odio.Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.In hendrerit gravida rutrum quisque non tellus orci ac.Pellentesque nec nam aliquam sem et tortor.Habitant morbi tristique senectus et.Adipiscing elit duis tristique sollicitudin nibh sit.Ornare aenean euismod elementum nisi quis eleifend.Commodo viverra maecenas accumsan lacus vel facilisis.Nulla posuere sollicitudin aliquam ultrices sagittis orci a." }],

}
const DrawersMiniTemplate = (args) => <DrawersMini {...args}></DrawersMini>
export const DrawerMini = DrawersMiniTemplate.bind({});
DrawerMini.args = {
    header: " Mini variant drawer",
    data:
        [{ content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Rhoncus dolor purus non enim praesent elementum facilisis leo vel.Risus at ultrices mi tempus imperdiet.Semper risus in hendrerit gravida rutrum quisque non tellus.Convallis convallis tellus id interdum velit laoreet id donec ultrices.Odio morbi quis commodo odio aenean sed adipiscing.Amet nisl suscipit adipiscing bibendum est ultricies integer quis.Cursus euismod quis viverra nibh cras.Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.Mauris commodo quis imperdiet massa tincidunt.Cras tincidunt lobortis feugiat vivamus at augue.At augue eget arcu dictum varius duis atconsectetur lorem.Velit sed ullamcorper morbi tincidunt.Lorem donec massa sapien faucibus et molestie ac." },
        { content: "Consequat mauris nunc congue nisi vitae suscipit.Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam.Pulvinar elementum integer enim neque volutpat ac tincidunt.Ornare suspendisse sed nisi lacus sed viverra tellus.Purus sit amet volutpat consequat mauris.Elementum eu facilisis sed odio morbi.Euismod lacinia at quis risus sed vulputate odio.Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.In hendrerit gravida rutrum quisque non tellus orci ac.Pellentesque nec nam aliquam sem et tortor.Habitant morbi tristique senectus et.Adipiscing elit duis tristique sollicitudin nibh sit.Ornare aenean euismod elementum nisi quis eleifend.Commodo viverra maecenas accumsan lacus vel facilisis.Nulla posuere sollicitudin aliquam ultrices sagittis orci a." }],

}
const DrawersPermanentLeftTemplate = (args) => <DrawersPermanentLeft {...args}></DrawersPermanentLeft>
export const DrawerPermanentLeft = DrawersPermanentLeftTemplate.bind({});
DrawerPermanentLeft.args = {
    header: "Permanent drawer",
    data:
        [{ content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Rhoncus dolor purus non enim praesent elementum facilisis leo vel.Risus at ultrices mi tempus imperdiet.Semper risus in hendrerit gravida rutrum quisque non tellus.Convallis convallis tellus id interdum velit laoreet id donec ultrices.Odio morbi quis commodo odio aenean sed adipiscing.Amet nisl suscipit adipiscing bibendum est ultricies integer quis.Cursus euismod quis viverra nibh cras.Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.Mauris commodo quis imperdiet massa tincidunt.Cras tincidunt lobortis feugiat vivamus at augue.At augue eget arcu dictum varius duis atconsectetur lorem.Velit sed ullamcorper morbi tincidunt.Lorem donec massa sapien faucibus et molestie ac." },
        { content: "Consequat mauris nunc congue nisi vitae suscipit.Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam.Pulvinar elementum integer enim neque volutpat ac tincidunt.Ornare suspendisse sed nisi lacus sed viverra tellus.Purus sit amet volutpat consequat mauris.Elementum eu facilisis sed odio morbi.Euismod lacinia at quis risus sed vulputate odio.Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.In hendrerit gravida rutrum quisque non tellus orci ac.Pellentesque nec nam aliquam sem et tortor.Habitant morbi tristique senectus et.Adipiscing elit duis tristique sollicitudin nibh sit.Ornare aenean euismod elementum nisi quis eleifend.Commodo viverra maecenas accumsan lacus vel facilisis.Nulla posuere sollicitudin aliquam ultrices sagittis orci a." }],

}
const DrawersPermanentRightTemplate = (args) => <DrawersPermanentRight {...args}></DrawersPermanentRight>
export const DrawerPermanentRight = DrawersPermanentRightTemplate.bind({});
DrawerPermanentRight.args = {
    header: "Permanent drawer",
    data:
        [{ content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Rhoncus dolor purus non enim praesent elementum facilisis leo vel.Risus at ultrices mi tempus imperdiet.Semper risus in hendrerit gravida rutrum quisque non tellus.Convallis convallis tellus id interdum velit laoreet id donec ultrices.Odio morbi quis commodo odio aenean sed adipiscing.Amet nisl suscipit adipiscing bibendum est ultricies integer quis.Cursus euismod quis viverra nibh cras.Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.Mauris commodo quis imperdiet massa tincidunt.Cras tincidunt lobortis feugiat vivamus at augue.At augue eget arcu dictum varius duis atconsectetur lorem.Velit sed ullamcorper morbi tincidunt.Lorem donec massa sapien faucibus et molestie ac." },
        { content: "Consequat mauris nunc congue nisi vitae suscipit.Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam.Pulvinar elementum integer enim neque volutpat ac tincidunt.Ornare suspendisse sed nisi lacus sed viverra tellus.Purus sit amet volutpat consequat mauris.Elementum eu facilisis sed odio morbi.Euismod lacinia at quis risus sed vulputate odio.Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.In hendrerit gravida rutrum quisque non tellus orci ac.Pellentesque nec nam aliquam sem et tortor.Habitant morbi tristique senectus et.Adipiscing elit duis tristique sollicitudin nibh sit.Ornare aenean euismod elementum nisi quis eleifend.Commodo viverra maecenas accumsan lacus vel facilisis.Nulla posuere sollicitudin aliquam ultrices sagittis orci a." }],

}
const DrawersClippedTemplate = (args) => <DrawersClipped {...args}></DrawersClipped>
export const DrawerClipped = DrawersClippedTemplate.bind({});
DrawerClipped.args = {
    header: "Clipped drawer",
    data:
        [{ content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Rhoncus dolor purus non enim praesent elementum facilisis leo vel.Risus at ultrices mi tempus imperdiet.Semper risus in hendrerit gravida rutrum quisque non tellus.Convallis convallis tellus id interdum velit laoreet id donec ultrices.Odio morbi quis commodo odio aenean sed adipiscing.Amet nisl suscipit adipiscing bibendum est ultricies integer quis.Cursus euismod quis viverra nibh cras.Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.Mauris commodo quis imperdiet massa tincidunt.Cras tincidunt lobortis feugiat vivamus at augue.At augue eget arcu dictum varius duis atconsectetur lorem.Velit sed ullamcorper morbi tincidunt.Lorem donec massa sapien faucibus et molestie ac." },
        { content: "Consequat mauris nunc congue nisi vitae suscipit.Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam.Pulvinar elementum integer enim neque volutpat ac tincidunt.Ornare suspendisse sed nisi lacus sed viverra tellus.Purus sit amet volutpat consequat mauris.Elementum eu facilisis sed odio morbi.Euismod lacinia at quis risus sed vulputate odio.Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.In hendrerit gravida rutrum quisque non tellus orci ac.Pellentesque nec nam aliquam sem et tortor.Habitant morbi tristique senectus et.Adipiscing elit duis tristique sollicitudin nibh sit.Ornare aenean euismod elementum nisi quis eleifend.Commodo viverra maecenas accumsan lacus vel facilisis.Nulla posuere sollicitudin aliquam ultrices sagittis orci a." }],

}