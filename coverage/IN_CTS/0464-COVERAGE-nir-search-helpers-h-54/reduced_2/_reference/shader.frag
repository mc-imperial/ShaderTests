#version 320 es
precision highp float;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform buf0 {
 vec2 resolution;
};
void main()
{
 float A[50];
 for(int i = 0; i < 200; i ++)
  {
   if(i >= int(resolution.x))
    {
     break;
    }
   if((4 * (i / 4)) == i)
    {
     A[i / 4] = float(i);
    }
  }
 for(int i = 0; i < 50; i ++)
  {
   if(i < int(gl_FragCoord.x))
    {
     break;
    }
   if(i > 0)
    {
     A[i] += A[i - 1];
    }
  }
 if(int(gl_FragCoord.x) < 20)
  {
   _GLF_color = vec4(A[0] / resolution.x, A[4] / resolution.y, 1.0, 1.0);
  }
 else
  if(int(gl_FragCoord.x) < 40)
   {
    _GLF_color = vec4(A[5] / resolution.x, A[9] / resolution.y, 1.0, 1.0);
   }
  else
   if(int(gl_FragCoord.x) < 60)
    {
     _GLF_color = vec4(A[10] / resolution.x, A[14] / resolution.y, 1.0, 1.0);
    }
   else
    if(int(gl_FragCoord.x) < 80)
     {
      _GLF_color = vec4(A[15] / resolution.x, A[19] / resolution.y, 1.0, 1.0);
     }
    else
     if(int(gl_FragCoord.x) < 100)
      {
       _GLF_color = vec4(A[20] / resolution.x, A[24] / resolution.y, 1.0, 1.0);
      }
     else
      if(int(gl_FragCoord.x) < 120)
       {
        _GLF_color = vec4(A[25] / resolution.x, A[29] / resolution.y, 1.0, 1.0);
       }
      else
       if(int(gl_FragCoord.x) < 140)
        {
         _GLF_color = vec4(A[30] / resolution.x, A[34] / resolution.y, 1.0, 1.0);
        }
       else
        if(int(gl_FragCoord.x) < 160)
         {
          _GLF_color = vec4(A[35] / resolution.x, A[39] / resolution.y, 1.0, 1.0);
         }
        else
         if(int(gl_FragCoord.x) < 180)
          {
           _GLF_color = vec4(A[40] / resolution.x, A[44] / resolution.y, 1.0, 1.0);
          }
         else
          if(int(gl_FragCoord.x) < 180)
           {
            _GLF_color = vec4(A[45] / resolution.x, A[49] / resolution.y, 1.0, 1.0);
           }
          else
           {
            discard;
           }
}
