#version 320 es

precision highp float;

void main()
{
 do
  {
   if(gl_FragCoord.y < 1.0)
    {
     continue;
    }
   if(false)
    {
     break;
    }
   if(true)
    {
     discard;
    }
   return;
  }
 while(false);
}
