#version 320 es

precision highp float;

precision highp int;

// Contents of one: 1
layout(set = 0, binding = 0) uniform buf0 {
 int one;
};
layout(location = 0) out highp vec4 _GLF_color;

void main()
{
 int a = 0;
 float f = floor(intBitsToFloat(0xffc00000));
 do
  {
   if(one == 0)
    {
     if(floor(intBitsToFloat(0xffc00000) > 0.0))
      {
       a = 2;
       break;
      }
    }
   a = 1;
  }
 while(false);
 if(a == 1)
  _GLF_color = vec4(1, 0, 0, 1);
 else
  _GLF_color = vec4(0);
}
