#version 320 es

precision highp float;

precision highp int;

void main()
{
 if(gl_FragCoord.x < 1.0)
  {
  }
 else
  {
   if(gl_FragCoord.y < 0.0)
    {
    }
   else
    {
     if(gl_FragCoord.x >= 1.0)
      {
       do
        {
        }
       while(gl_FragCoord.y < 0.0);
      }
     else
      {
      }
    }
  }
}
