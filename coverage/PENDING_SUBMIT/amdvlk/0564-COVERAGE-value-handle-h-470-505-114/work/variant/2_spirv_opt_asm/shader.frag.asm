; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 180
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %40 %88
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "func("
               OpName %11 "a"
               OpName %15 "buf1"
               OpMemberName %15 0 "_GLF_uniform_int_values"
               OpName %17 ""
               OpName %23 "i"
               OpName %40 "gl_FragCoord"
               OpName %50 "j"
               OpName %78 "buf0"
               OpMemberName %78 0 "_GLF_uniform_float_values"
               OpName %80 ""
               OpName %88 "_GLF_color"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 1
               OpDecorate %40 BuiltIn FragCoord
               OpDecorate %77 ArrayStride 16
               OpMemberDecorate %78 0 Offset 0
               OpDecorate %78 Block
               OpDecorate %80 DescriptorSet 0
               OpDecorate %80 Binding 0
               OpDecorate %88 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeFunction %6
         %10 = OpTypePointer Function %6
         %12 = OpTypeInt 32 0
         %13 = OpConstant %12 4
         %14 = OpTypeArray %6 %13
         %15 = OpTypeStruct %14
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpConstant %6 0
         %19 = OpConstant %6 2
         %20 = OpTypePointer Uniform %6
         %24 = OpConstant %6 3
         %35 = OpTypeBool
         %37 = OpTypeFloat 32
         %38 = OpTypeVector %37 4
         %39 = OpTypePointer Input %38
         %40 = OpVariable %39 Input
         %41 = OpConstant %12 1
         %42 = OpTypePointer Input %37
         %45 = OpConstant %37 0
         %51 = OpConstant %6 1
         %58 = OpConstant %6 80
         %61 = OpConstant %6 5
         %74 = OpConstant %12 0
         %77 = OpTypeArray %37 %41
         %78 = OpTypeStruct %77
         %79 = OpTypePointer Uniform %78
         %80 = OpVariable %79 Uniform
         %81 = OpTypePointer Uniform %37
         %87 = OpTypePointer Output %38
         %88 = OpVariable %87 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
        %123 = OpVariable %10 Function
        %124 = OpVariable %10 Function
        %125 = OpVariable %10 Function
        %126 = OpVariable %10 Function
        %100 = OpAccessChain %20 %17 %18 %19
        %101 = OpLoad %6 %100
        %102 = OpConvertSToF %37 %101
        %103 = OpCompositeConstruct %38 %102 %102 %102 %102
               OpStore %88 %103
        %128 = OpAccessChain %20 %17 %18 %19
        %129 = OpLoad %6 %128
               OpStore %123 %129
        %130 = OpAccessChain %20 %17 %18 %24
        %131 = OpLoad %6 %130
               OpStore %124 %131
               OpBranch %132
        %132 = OpLabel
        %134 = OpLoad %6 %124
        %135 = OpAccessChain %20 %17 %18 %18
        %136 = OpLoad %6 %135
        %137 = OpSLessThan %35 %134 %136
               OpLoopMerge %178 %175 None
               OpBranchConditional %137 %138 %178
        %138 = OpLabel
        %139 = OpAccessChain %42 %40 %41
        %140 = OpLoad %37 %139
        %141 = OpFOrdLessThan %35 %140 %45
               OpSelectionMerge %143 None
               OpBranchConditional %141 %142 %143
        %142 = OpLabel
               OpKill
        %143 = OpLabel
               OpStore %125 %51
               OpBranch %144
        %144 = OpLabel
        %146 = OpLoad %6 %125
        %147 = OpSLessThan %35 %146 %58
               OpLoopMerge %174 %171 None
               OpBranchConditional %147 %148 %174
        %148 = OpLabel
        %149 = OpLoad %6 %123
        %150 = OpSGreaterThanEqual %35 %149 %61
               OpSelectionMerge %157 None
               OpBranchConditional %150 %151 %157
        %151 = OpLabel
        %152 = OpAccessChain %42 %40 %41
        %153 = OpLoad %37 %152
        %154 = OpFOrdLessThan %35 %153 %45
               OpSelectionMerge %156 None
               OpBranchConditional %154 %155 %156
        %155 = OpLabel
               OpBranch %171
        %156 = OpLabel
               OpBranch %174
        %157 = OpLabel
        %158 = OpLoad %6 %123
        %159 = OpIAdd %6 %158 %51
               OpStore %123 %159
        %160 = OpAccessChain %42 %40 %74
        %161 = OpLoad %37 %160
        %162 = OpAccessChain %81 %80 %18 %18
        %163 = OpLoad %37 %162
        %164 = OpFOrdLessThan %35 %161 %163
               OpSelectionMerge %170 None
               OpBranchConditional %164 %165 %170
        %165 = OpLabel
        %166 = OpAccessChain %20 %17 %18 %24
        %167 = OpLoad %6 %166
        %168 = OpConvertSToF %37 %167
        %169 = OpCompositeConstruct %38 %168 %168 %168 %168
               OpStore %88 %169
               OpBranch %170
        %170 = OpLabel
               OpBranch %171
        %171 = OpLabel
        %172 = OpLoad %6 %125
        %173 = OpIAdd %6 %172 %51
               OpStore %125 %173
               OpBranch %144
        %174 = OpLabel
               OpBranch %175
        %175 = OpLabel
        %176 = OpLoad %6 %124
        %177 = OpIAdd %6 %176 %51
               OpStore %124 %177
               OpBranch %132
        %178 = OpLabel
        %179 = OpLoad %6 %123
               OpStore %126 %179
        %104 = OpLoad %6 %126
        %105 = OpAccessChain %20 %17 %18 %51
        %106 = OpLoad %6 %105
        %107 = OpIEqual %35 %104 %106
               OpSelectionMerge %109 None
               OpBranchConditional %107 %108 %109
        %108 = OpLabel
        %110 = OpAccessChain %20 %17 %18 %24
        %111 = OpLoad %6 %110
        %112 = OpConvertSToF %37 %111
        %113 = OpAccessChain %20 %17 %18 %19
        %114 = OpLoad %6 %113
        %115 = OpConvertSToF %37 %114
        %116 = OpAccessChain %20 %17 %18 %19
        %117 = OpLoad %6 %116
        %118 = OpConvertSToF %37 %117
        %119 = OpAccessChain %20 %17 %18 %24
        %120 = OpLoad %6 %119
        %121 = OpConvertSToF %37 %120
        %122 = OpCompositeConstruct %38 %112 %115 %118 %121
               OpStore %88 %122
               OpBranch %109
        %109 = OpLabel
               OpReturn
               OpFunctionEnd
          %8 = OpFunction %6 None %7
          %9 = OpLabel
         %11 = OpVariable %10 Function
         %23 = OpVariable %10 Function
         %50 = OpVariable %10 Function
         %21 = OpAccessChain %20 %17 %18 %19
         %22 = OpLoad %6 %21
               OpStore %11 %22
         %25 = OpAccessChain %20 %17 %18 %24
         %26 = OpLoad %6 %25
               OpStore %23 %26
               OpBranch %27
         %27 = OpLabel
               OpLoopMerge %29 %30 None
               OpBranch %31
         %31 = OpLabel
         %32 = OpLoad %6 %23
         %33 = OpAccessChain %20 %17 %18 %18
         %34 = OpLoad %6 %33
         %36 = OpSLessThan %35 %32 %34
               OpBranchConditional %36 %28 %29
         %28 = OpLabel
         %43 = OpAccessChain %42 %40 %41
         %44 = OpLoad %37 %43
         %46 = OpFOrdLessThan %35 %44 %45
               OpSelectionMerge %48 None
               OpBranchConditional %46 %47 %48
         %47 = OpLabel
               OpKill
         %48 = OpLabel
               OpStore %50 %51
               OpBranch %52
         %52 = OpLabel
               OpLoopMerge %54 %55 None
               OpBranch %56
         %56 = OpLabel
         %57 = OpLoad %6 %50
         %59 = OpSLessThan %35 %57 %58
               OpBranchConditional %59 %53 %54
         %53 = OpLabel
         %60 = OpLoad %6 %11
         %62 = OpSGreaterThanEqual %35 %60 %61
               OpSelectionMerge %64 None
               OpBranchConditional %62 %63 %64
         %63 = OpLabel
         %65 = OpAccessChain %42 %40 %41
         %66 = OpLoad %37 %65
         %67 = OpFOrdLessThan %35 %66 %45
               OpSelectionMerge %69 None
               OpBranchConditional %67 %68 %69
         %68 = OpLabel
               OpBranch %55
         %69 = OpLabel
               OpBranch %54
         %64 = OpLabel
         %72 = OpLoad %6 %11
         %73 = OpIAdd %6 %72 %51
               OpStore %11 %73
         %75 = OpAccessChain %42 %40 %74
         %76 = OpLoad %37 %75
         %82 = OpAccessChain %81 %80 %18 %18
         %83 = OpLoad %37 %82
         %84 = OpFOrdLessThan %35 %76 %83
               OpSelectionMerge %86 None
               OpBranchConditional %84 %85 %86
         %85 = OpLabel
         %89 = OpAccessChain %20 %17 %18 %24
         %90 = OpLoad %6 %89
         %91 = OpConvertSToF %37 %90
         %92 = OpCompositeConstruct %38 %91 %91 %91 %91
               OpStore %88 %92
               OpBranch %86
         %86 = OpLabel
               OpBranch %55
         %55 = OpLabel
         %93 = OpLoad %6 %50
         %94 = OpIAdd %6 %93 %51
               OpStore %50 %94
               OpBranch %52
         %54 = OpLabel
               OpBranch %30
         %30 = OpLabel
         %95 = OpLoad %6 %23
         %96 = OpIAdd %6 %95 %51
               OpStore %23 %96
               OpBranch %27
         %29 = OpLabel
         %97 = OpLoad %6 %11
               OpReturnValue %97
               OpFunctionEnd
