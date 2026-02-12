Preview files for Timon Dik
Folder: openclaw-preview-20260211
Files:
 - index.html (hero + variants + emails preview)

How to upload (run from your Mac):
1) Create the remote preview folder (if not exists) and upload the files with scp:
   scp -r deploy_preview/openclaw-preview-20260211/ Timon_dik@ns2.syrahost.com:/public_html/openclaw-preview-20260211
   (you will be prompted for the password)

2) If scp is unavailable, use sftp:
   sftp Timon_dik@ns2.syrahost.com
   > mkdir /public_html/openclaw-preview-20260211
   > put -r deploy_preview/openclaw-preview-20260211/* /public_html/openclaw-preview-20260211/
   > exit

3) After upload, view the preview at: https://your-domain.com/openclaw-preview-20260211/index.html
   If unsure of the domain path, try https://timondik.com.au/openclaw-preview-20260211/index.html

I will check back every 5 minutes for progress. If you prefer I attempt automatic upload, reply "auto-upload" (I will still not use pasted credentials).