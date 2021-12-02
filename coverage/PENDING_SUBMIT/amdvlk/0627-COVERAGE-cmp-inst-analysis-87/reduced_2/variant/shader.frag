#version 320 es

precision highp int;

precision highp float;

// Contents of GLF_live2injectionSwitch: [0.83264154, 0.8637513]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 GLF_live2injectionSwitch;
};
precision highp int;

precision highp float;

void main()
{
 int GLF_live2_looplimiter1 = 1;
 for(int GLF_live2i = 1; 1 <= int(GLF_live2injectionSwitch.y); 1)
  {
   if(GLF_live2_looplimiter1 >= 1)
    {
     break;
    }
   GLF_live2_looplimiter1 ++;
  }
}
