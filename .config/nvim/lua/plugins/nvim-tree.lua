return {
	"nvim-tree/nvim-tree.lua",
	config = function ()
		require("nvim-tree").setup({
             sort_by = "case_sensitive",
             view = {
               width = 30,
             },
             renderer = {
               group_empty = true,
             },
             filters = {
               dotfiles = true,
             },
         })
	end
}
