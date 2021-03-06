#version 320 es
precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform buf0 {
 vec2 injectionSwitch;
};
layout(set = 0, binding = 1) uniform buf1 {
 vec2 resolution;
};
bool checkSwap(float a, float b)
{
 return gl_FragCoord.y < resolution.y / 2.0 ? a > b : a < b;
}
void main()
{
 float data[10];
 for(int i = 0; i < 10; i ++)
  {
   data[i] = float(10 - i) * injectionSwitch.y;
  }
 for(int i = 0; i < 9; i ++)
  {
   for(int j = 0; j < 10; j ++)
    {
     if(j < i + 1)
      {
       continue;
      }
     bool doSwap = checkSwap(data[i], data[j]);
     if(doSwap)
      {
       float temp = data[i];
       data[i] = data[j];
       data[j] = temp;
      }
    }
  }
 if(gl_FragCoord.x < resolution.x / 2.0)
  {
   _GLF_color = vec4(data[0] / 10.0, data[5] / 10.0, data[9] / 10.0, 1.0);
  }
 else
  {
   _GLF_color = vec4(data[5] / 10.0, data[9] / 10.0, data[0] / 10.0, 1.0);
  }
}
