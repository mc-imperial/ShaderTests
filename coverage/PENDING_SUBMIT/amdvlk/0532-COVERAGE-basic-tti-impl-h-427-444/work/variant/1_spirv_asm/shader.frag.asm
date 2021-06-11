; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 186
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %110
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "arr"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %54 "i"
               OpName %73 "a"
               OpName %88 "j"
               OpName %110 "_GLF_color"
               OpName %125 "ref"
               OpName %159 "i"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
               OpDecorate %110 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 16
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 5
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %6 0
         %18 = OpConstant %6 1
         %19 = OpTypePointer Uniform %6
         %53 = OpTypePointer Function %6
         %55 = OpConstant %6 3
         %71 = OpTypeBool
         %97 = OpConstant %6 4
        %107 = OpTypeFloat 32
        %108 = OpTypeVector %107 4
        %109 = OpTypePointer Output %108
        %110 = OpVariable %109 Output
        %114 = OpConstant %6 2
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %54 = OpVariable %53 Function
         %73 = OpVariable %53 Function
         %88 = OpVariable %53 Function
        %125 = OpVariable %10 Function
        %159 = OpVariable %53 Function
         %20 = OpAccessChain %19 %16 %17 %18
         %21 = OpLoad %6 %20
         %22 = OpAccessChain %19 %16 %17 %18
         %23 = OpLoad %6 %22
         %24 = OpAccessChain %19 %16 %17 %18
         %25 = OpLoad %6 %24
         %26 = OpAccessChain %19 %16 %17 %18
         %27 = OpLoad %6 %26
         %28 = OpAccessChain %19 %16 %17 %18
         %29 = OpLoad %6 %28
         %30 = OpAccessChain %19 %16 %17 %18
         %31 = OpLoad %6 %30
         %32 = OpAccessChain %19 %16 %17 %18
         %33 = OpLoad %6 %32
         %34 = OpAccessChain %19 %16 %17 %18
         %35 = OpLoad %6 %34
         %36 = OpAccessChain %19 %16 %17 %18
         %37 = OpLoad %6 %36
         %38 = OpAccessChain %19 %16 %17 %18
         %39 = OpLoad %6 %38
         %40 = OpAccessChain %19 %16 %17 %18
         %41 = OpLoad %6 %40
         %42 = OpAccessChain %19 %16 %17 %18
         %43 = OpLoad %6 %42
         %44 = OpAccessChain %19 %16 %17 %18
         %45 = OpLoad %6 %44
         %46 = OpAccessChain %19 %16 %17 %18
         %47 = OpLoad %6 %46
         %48 = OpAccessChain %19 %16 %17 %18
         %49 = OpLoad %6 %48
         %50 = OpAccessChain %19 %16 %17 %18
         %51 = OpLoad %6 %50
         %52 = OpCompositeConstruct %9 %21 %23 %25 %27 %29 %31 %33 %35 %37 %39 %41 %43 %45 %47 %49 %51
               OpStore %11 %52
         %56 = OpAccessChain %19 %16 %17 %55
         %57 = OpLoad %6 %56
               OpStore %54 %57
               OpBranch %58
         %58 = OpLabel
               OpLoopMerge %60 %61 None
               OpBranch %62
         %62 = OpLabel
         %63 = OpLoad %6 %54
         %64 = OpAccessChain %19 %16 %17 %18
         %65 = OpLoad %6 %64
         %66 = OpAccessChain %19 %16 %17 %18
         %67 = OpLoad %6 %66
         %68 = OpAccessChain %19 %16 %17 %18
         %69 = OpLoad %6 %68
         %70 = OpBitFieldSExtract %6 %65 %67 %69
         %72 = OpSGreaterThanEqual %71 %63 %70
               OpBranchConditional %72 %59 %60
         %59 = OpLabel
         %74 = OpAccessChain %19 %16 %17 %18
         %75 = OpLoad %6 %74
               OpStore %73 %75
         %76 = OpAccessChain %19 %16 %17 %18
         %77 = OpLoad %6 %76
         %78 = OpAccessChain %53 %11 %77
         %79 = OpLoad %6 %78
         %80 = OpAccessChain %19 %16 %17 %18
         %81 = OpLoad %6 %80
         %82 = OpIEqual %71 %79 %81
               OpSelectionMerge %84 None
               OpBranchConditional %82 %83 %84
         %83 = OpLabel
         %85 = OpLoad %6 %73
         %86 = OpLoad %6 %54
         %87 = OpAccessChain %53 %11 %85
               OpStore %87 %86
               OpBranch %84
         %84 = OpLabel
         %89 = OpAccessChain %19 %16 %17 %55
         %90 = OpLoad %6 %89
               OpStore %88 %90
               OpBranch %91
         %91 = OpLabel
               OpLoopMerge %93 %94 None
               OpBranch %95
         %95 = OpLabel
         %96 = OpLoad %6 %88
         %98 = OpAccessChain %19 %16 %17 %97
         %99 = OpLoad %6 %98
        %100 = OpSLessThan %71 %96 %99
               OpBranchConditional %100 %92 %93
         %92 = OpLabel
        %101 = OpLoad %6 %88
        %102 = OpAccessChain %53 %11 %101
               OpStore %102 %17
               OpBranch %94
         %94 = OpLabel
        %103 = OpLoad %6 %88
        %104 = OpIAdd %6 %103 %18
               OpStore %88 %104
               OpBranch %91
         %93 = OpLabel
               OpBranch %61
         %61 = OpLabel
        %105 = OpLoad %6 %54
        %106 = OpISub %6 %105 %18
               OpStore %54 %106
               OpBranch %58
         %60 = OpLabel
        %111 = OpAccessChain %19 %16 %17 %18
        %112 = OpLoad %6 %111
        %113 = OpConvertSToF %107 %112
        %115 = OpAccessChain %19 %16 %17 %114
        %116 = OpLoad %6 %115
        %117 = OpConvertSToF %107 %116
        %118 = OpAccessChain %19 %16 %17 %114
        %119 = OpLoad %6 %118
        %120 = OpConvertSToF %107 %119
        %121 = OpAccessChain %19 %16 %17 %18
        %122 = OpLoad %6 %121
        %123 = OpConvertSToF %107 %122
        %124 = OpCompositeConstruct %108 %113 %117 %120 %123
               OpStore %110 %124
        %126 = OpAccessChain %19 %16 %17 %18
        %127 = OpLoad %6 %126
        %128 = OpAccessChain %19 %16 %17 %55
        %129 = OpLoad %6 %128
        %130 = OpAccessChain %19 %16 %17 %114
        %131 = OpLoad %6 %130
        %132 = OpAccessChain %19 %16 %17 %114
        %133 = OpLoad %6 %132
        %134 = OpAccessChain %19 %16 %17 %114
        %135 = OpLoad %6 %134
        %136 = OpAccessChain %19 %16 %17 %114
        %137 = OpLoad %6 %136
        %138 = OpAccessChain %19 %16 %17 %114
        %139 = OpLoad %6 %138
        %140 = OpAccessChain %19 %16 %17 %18
        %141 = OpLoad %6 %140
        %142 = OpAccessChain %19 %16 %17 %18
        %143 = OpLoad %6 %142
        %144 = OpAccessChain %19 %16 %17 %18
        %145 = OpLoad %6 %144
        %146 = OpAccessChain %19 %16 %17 %18
        %147 = OpLoad %6 %146
        %148 = OpAccessChain %19 %16 %17 %18
        %149 = OpLoad %6 %148
        %150 = OpAccessChain %19 %16 %17 %18
        %151 = OpLoad %6 %150
        %152 = OpAccessChain %19 %16 %17 %18
        %153 = OpLoad %6 %152
        %154 = OpAccessChain %19 %16 %17 %18
        %155 = OpLoad %6 %154
        %156 = OpAccessChain %19 %16 %17 %18
        %157 = OpLoad %6 %156
        %158 = OpCompositeConstruct %9 %127 %129 %131 %133 %135 %137 %139 %141 %143 %145 %147 %149 %151 %153 %155 %157
               OpStore %125 %158
        %160 = OpAccessChain %19 %16 %17 %114
        %161 = OpLoad %6 %160
               OpStore %159 %161
               OpBranch %162
        %162 = OpLabel
               OpLoopMerge %164 %165 None
               OpBranch %166
        %166 = OpLabel
        %167 = OpLoad %6 %159
        %168 = OpAccessChain %19 %16 %17 %17
        %169 = OpLoad %6 %168
        %170 = OpSLessThan %71 %167 %169
               OpBranchConditional %170 %163 %164
        %163 = OpLabel
        %171 = OpLoad %6 %159
        %172 = OpAccessChain %53 %11 %171
        %173 = OpLoad %6 %172
        %174 = OpLoad %6 %159
        %175 = OpAccessChain %53 %125 %174
        %176 = OpLoad %6 %175
        %177 = OpINotEqual %71 %173 %176
               OpSelectionMerge %179 None
               OpBranchConditional %177 %178 %179
        %178 = OpLabel
        %180 = OpAccessChain %19 %16 %17 %114
        %181 = OpLoad %6 %180
        %182 = OpConvertSToF %107 %181
        %183 = OpCompositeConstruct %108 %182 %182 %182 %182
               OpStore %110 %183
               OpBranch %179
        %179 = OpLabel
               OpBranch %165
        %165 = OpLabel
        %184 = OpLoad %6 %159
        %185 = OpIAdd %6 %184 %18
               OpStore %159 %185
               OpBranch %162
        %164 = OpLabel
               OpReturn
               OpFunctionEnd
