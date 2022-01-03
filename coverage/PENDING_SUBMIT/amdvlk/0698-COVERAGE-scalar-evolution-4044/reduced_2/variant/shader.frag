#version 320 es

precision highp float;

precision highp int;

// Contents of GLF_live7resolution: [0.8534597, 0.40386063]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 GLF_live7resolution;
};
precision highp float;

precision highp int;

int performPartition()
{
 ivec2 GLF_live7p = ivec2(1);
 GLF_live7p = ivec2(int(GLF_live7resolution.x), 1);
 int GLF_live7_looplimiter0 = 1;
 for( 1;
 true; 1)
  {
   if(GLF_live7_looplimiter0 >= 7)
    {
     break;
    }
   GLF_live7_looplimiter0 ++;
   ivec2 GLF_live7iter_inline_return_value_1 = ivec2(1);
   {
    ivec2 GLF_live7p = GLF_live7p;
    if(GLF_live7p.x > 1)
     {
      GLF_live7p.y --;
     }
    GLF_live7p.x += GLF_live7p.y / 2;
    GLF_live7iter_inline_return_value_1 = GLF_live7p;
   }
   GLF_live7p = GLF_live7iter_inline_return_value_1;
  }
 while(GLF_live7p.x > 1)
  {
  }
 return 1;
}
void main()
{
 performPartition();
}
