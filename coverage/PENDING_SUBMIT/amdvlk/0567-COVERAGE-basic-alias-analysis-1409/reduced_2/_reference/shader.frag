#version 320 es
precision highp float;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform buf0 {
 float one;
};
layout(set = 0, binding = 1) uniform buf1 {
 vec2 resolution;
};
mat2 m22;

mat2x3 m23;

mat2x4 m24;

mat3x2 m32;

mat3 m33;

mat3x4 m34;

mat4x2 m42;

mat4x3 m43;

mat4 m44;

void main()
{
 for(int c = 0; c < 2; c ++)
  {
   for(int r = 0; r < 2; r ++)
    {
     m22[c][r] = one;
    }
  }
 ;
 for(int c = 0; c < 2; c ++)
  {
   for(int r = 0; r < 3; r ++)
    {
     m23[c][r] = one;
    }
  }
 ;
 for(int c = 0; c < 2; c ++)
  {
   for(int r = 0; r < 4; r ++)
    {
     m24[c][r] = one;
    }
  }
 ;
 for(int c = 0; c < 3; c ++)
  {
   for(int r = 0; r < 2; r ++)
    {
     m32[c][r] = one;
    }
  }
 ;
 for(int c = 0; c < 3; c ++)
  {
   for(int r = 0; r < 3; r ++)
    {
     m33[c][r] = one;
    }
  }
 ;
 for(int c = 0; c < 3; c ++)
  {
   for(int r = 0; r < 4; r ++)
    {
     m34[c][r] = one;
    }
  }
 ;
 for(int c = 0; c < 4; c ++)
  {
   for(int r = 0; r < 2; r ++)
    {
     m42[c][r] = one;
    }
  }
 ;
 for(int c = 0; c < 4; c ++)
  {
   for(int r = 0; r < 3; r ++)
    {
     m43[c][r] = one;
    }
  }
 ;
 for(int c = 0; c < 4; c ++)
  {
   for(int r = 0; r < 4; r ++)
    {
     m44[c][r] = one;
    }
  }
 ;
 float sums[9];
 sums[0] = 0.0;
 for(int c = 0; c < 2; c ++)
  {
   for(int r = 0; r < 2; r ++)
    {
     sums[0] += m22[c][r];
    }
  }
 sums[0] /= 16.0;
 ;
 sums[1] = 0.0;
 for(int c = 0; c < 2; c ++)
  {
   for(int r = 0; r < 3; r ++)
    {
     sums[1] += m23[c][r];
    }
  }
 sums[1] /= 16.0;
 ;
 sums[2] = 0.0;
 for(int c = 0; c < 2; c ++)
  {
   for(int r = 0; r < 4; r ++)
    {
     sums[2] += m24[c][r];
    }
  }
 sums[2] /= 16.0;
 ;
 sums[3] = 0.0;
 for(int c = 0; c < 3; c ++)
  {
   for(int r = 0; r < 2; r ++)
    {
     sums[3] += m32[c][r];
    }
  }
 sums[3] /= 16.0;
 ;
 sums[4] = 0.0;
 for(int c = 0; c < 3; c ++)
  {
   for(int r = 0; r < 3; r ++)
    {
     sums[4] += m33[c][r];
    }
  }
 sums[4] /= 16.0;
 ;
 sums[5] = 0.0;
 for(int c = 0; c < 3; c ++)
  {
   for(int r = 0; r < 4; r ++)
    {
     sums[5] += m34[c][r];
    }
  }
 sums[5] /= 16.0;
 ;
 sums[6] = 0.0;
 for(int c = 0; c < 4; c ++)
  {
   for(int r = 0; r < 2; r ++)
    {
     sums[6] += m42[c][r];
    }
  }
 sums[6] /= 16.0;
 ;
 sums[7] = 0.0;
 for(int c = 0; c < 4; c ++)
  {
   for(int r = 0; r < 3; r ++)
    {
     sums[7] += m43[c][r];
    }
  }
 sums[7] /= 16.0;
 ;
 sums[8] = 0.0;
 for(int c = 0; c < 4; c ++)
  {
   for(int r = 0; r < 4; r ++)
    {
     sums[8] += m44[c][r];
    }
  }
 sums[8] /= 16.0;
 ;
 int region_x = int(gl_FragCoord.x / (resolution.x / 3.0));
 int region_y = int(gl_FragCoord.y / (resolution.x / 3.0));
 int overall_region = region_y * 3 + region_x;
 if(overall_region > 0 && overall_region < 9)
  {
   _GLF_color = vec4(vec3(sums[overall_region]), 1.0);
  }
 else
  {
   _GLF_color = vec4(vec3(0.0), 1.0);
  }
}
