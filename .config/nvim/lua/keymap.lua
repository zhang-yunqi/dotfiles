vim.cmd[[
    noremap <silent> n h
    noremap <silent> l u
    noremap <silent> k i
    noremap <silent> i l
    noremap <silent> u k
    noremap <silent> e j
	nmap tt :NvimTreeToggle<CR>
	nmap gt :NvimTreeFocus<CR>
	xmap <leader>a  <Plug>(coc-codeaction-selected)
    nmap <leader>a  <Plug>(coc-codeaction-selected)
	nmap md <Plug>MarkdownPreview
	nmap ra :Joshuto<CR>	
	nmap <C-f> :Telescope find_files<CR>
	map tm :TableModeToggle<CR>
	map r <Plug>(leap-backward-to)
]]
