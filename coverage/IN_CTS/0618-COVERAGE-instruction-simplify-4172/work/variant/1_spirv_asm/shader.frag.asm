; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 170
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %74 %151
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %7 "S"
               OpMemberName %7 0 "data"
               OpName %11 "func0(struct-S-i11;"
               OpName %10 "s"
               OpName %14 "func1("
               OpName %20 "arr"
               OpName %43 "a"
               OpName %46 "buf1"
               OpMemberName %46 0 "_GLF_uniform_int_values"
               OpName %48 ""
               OpName %53 "i"
               OpName %66 "s"
               OpName %74 "gl_FragCoord"
               OpName %81 "buf0"
               OpMemberName %81 0 "_GLF_uniform_float_values"
               OpName %83 ""
               OpName %92 "buf_push"
               OpMemberName %92 0 "injectionSwitch"
               OpName %94 ""
               OpName %138 "param"
               OpName %151 "_GLF_color"
               OpDecorate %45 ArrayStride 16
               OpMemberDecorate %46 0 Offset 0
               OpDecorate %46 Block
               OpDecorate %48 DescriptorSet 0
               OpDecorate %48 Binding 1
               OpDecorate %74 BuiltIn FragCoord
               OpDecorate %80 ArrayStride 16
               OpMemberDecorate %81 0 Offset 0
               OpDecorate %81 Block
               OpDecorate %83 DescriptorSet 0
               OpDecorate %83 Binding 0
               OpMemberDecorate %92 0 Offset 0
               OpDecorate %92 Block
               OpDecorate %151 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeStruct %6
          %8 = OpTypePointer Function %7
          %9 = OpTypeFunction %2 %8
         %13 = OpTypeFunction %6
         %16 = OpTypeInt 32 0
         %17 = OpConstant %16 10
         %18 = OpTypeArray %7 %17
         %19 = OpTypePointer Private %18
         %20 = OpVariable %19 Private
         %21 = OpConstant %6 1
         %22 = OpConstantComposite %7 %21
         %23 = OpConstant %6 2
         %24 = OpConstantComposite %7 %23
         %25 = OpConstant %6 3
         %26 = OpConstantComposite %7 %25
         %27 = OpConstant %6 4
         %28 = OpConstantComposite %7 %27
         %29 = OpConstant %6 5
         %30 = OpConstantComposite %7 %29
         %31 = OpConstant %6 6
         %32 = OpConstantComposite %7 %31
         %33 = OpConstant %6 7
         %34 = OpConstantComposite %7 %33
         %35 = OpConstant %6 8
         %36 = OpConstantComposite %7 %35
         %37 = OpConstant %6 9
         %38 = OpConstantComposite %7 %37
         %39 = OpConstant %6 10
         %40 = OpConstantComposite %7 %39
         %41 = OpConstantComposite %18 %22 %24 %26 %28 %30 %32 %34 %36 %38 %40
         %42 = OpTypePointer Function %6
         %44 = OpConstant %16 4
         %45 = OpTypeArray %6 %44
         %46 = OpTypeStruct %45
         %47 = OpTypePointer Uniform %46
         %48 = OpVariable %47 Uniform
         %49 = OpConstant %6 0
         %50 = OpTypePointer Uniform %6
         %64 = OpTypeBool
         %68 = OpTypePointer Private %7
         %71 = OpTypeFloat 32
         %72 = OpTypeVector %71 4
         %73 = OpTypePointer Input %72
         %74 = OpVariable %73 Input
         %75 = OpConstant %16 0
         %76 = OpTypePointer Input %71
         %79 = OpConstant %16 1
         %80 = OpTypeArray %71 %79
         %81 = OpTypeStruct %80
         %82 = OpTypePointer Uniform %81
         %83 = OpVariable %82 Uniform
         %84 = OpTypePointer Uniform %71
         %91 = OpTypeVector %71 2
         %92 = OpTypeStruct %91
         %93 = OpTypePointer PushConstant %92
         %94 = OpVariable %93 PushConstant
         %95 = OpTypePointer PushConstant %71
        %111 = OpConstant %6 -1
        %150 = OpTypePointer Output %72
        %151 = OpVariable %150 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
        %138 = OpVariable %8 Function
               OpStore %20 %41
        %136 = OpAccessChain %50 %48 %49 %25
        %137 = OpLoad %6 %136
        %139 = OpAccessChain %68 %20 %137
        %140 = OpLoad %7 %139
               OpStore %138 %140
        %141 = OpFunctionCall %2 %11 %138
        %142 = OpLoad %7 %138
        %143 = OpAccessChain %68 %20 %137
               OpStore %143 %142
        %144 = OpFunctionCall %6 %14
        %145 = OpAccessChain %50 %48 %49 %49
        %146 = OpLoad %6 %145
        %147 = OpIEqual %64 %144 %146
               OpSelectionMerge %149 None
               OpBranchConditional %147 %148 %165
        %148 = OpLabel
        %152 = OpAccessChain %50 %48 %49 %25
        %153 = OpLoad %6 %152
        %154 = OpConvertSToF %71 %153
        %155 = OpAccessChain %50 %48 %49 %21
        %156 = OpLoad %6 %155
        %157 = OpConvertSToF %71 %156
        %158 = OpAccessChain %50 %48 %49 %21
        %159 = OpLoad %6 %158
        %160 = OpConvertSToF %71 %159
        %161 = OpAccessChain %50 %48 %49 %25
        %162 = OpLoad %6 %161
        %163 = OpConvertSToF %71 %162
        %164 = OpCompositeConstruct %72 %154 %157 %160 %163
               OpStore %151 %164
               OpBranch %149
        %165 = OpLabel
        %166 = OpAccessChain %50 %48 %49 %21
        %167 = OpLoad %6 %166
        %168 = OpConvertSToF %71 %167
        %169 = OpCompositeConstruct %72 %168 %168 %168 %168
               OpStore %151 %169
               OpBranch %149
        %149 = OpLabel
               OpReturn
               OpFunctionEnd
         %11 = OpFunction %2 None %9
         %10 = OpFunctionParameter %8
         %12 = OpLabel
               OpReturn
               OpFunctionEnd
         %14 = OpFunction %6 None %13
         %15 = OpLabel
         %43 = OpVariable %42 Function
         %53 = OpVariable %42 Function
         %66 = OpVariable %8 Function
         %51 = OpAccessChain %50 %48 %49 %21
         %52 = OpLoad %6 %51
               OpStore %43 %52
         %54 = OpAccessChain %50 %48 %49 %21
         %55 = OpLoad %6 %54
               OpStore %53 %55
               OpBranch %56
         %56 = OpLabel
               OpLoopMerge %58 %59 None
               OpBranch %60
         %60 = OpLabel
         %61 = OpLoad %6 %53
         %62 = OpAccessChain %50 %48 %49 %49
         %63 = OpLoad %6 %62
         %65 = OpSLessThan %64 %61 %63
               OpBranchConditional %65 %57 %58
         %57 = OpLabel
         %67 = OpLoad %6 %43
         %69 = OpAccessChain %68 %20 %67
         %70 = OpLoad %7 %69
               OpStore %66 %70
         %77 = OpAccessChain %76 %74 %75
         %78 = OpLoad %71 %77
         %85 = OpAccessChain %84 %83 %49 %49
         %86 = OpLoad %71 %85
         %87 = OpFOrdLessThan %64 %78 %86
               OpSelectionMerge %89 None
               OpBranchConditional %87 %88 %89
         %88 = OpLabel
               OpBranch %59
         %89 = OpLabel
         %96 = OpAccessChain %95 %94 %49 %75
         %97 = OpLoad %71 %96
         %98 = OpAccessChain %95 %94 %49 %79
         %99 = OpLoad %71 %98
        %100 = OpFOrdGreaterThan %64 %97 %99
               OpSelectionMerge %102 None
               OpBranchConditional %100 %101 %102
        %101 = OpLabel
               OpBranch %59
        %102 = OpLabel
        %104 = OpAccessChain %42 %66 %49
        %105 = OpLoad %6 %104
        %106 = OpAccessChain %50 %48 %49 %23
        %107 = OpLoad %6 %106
        %108 = OpIEqual %64 %105 %107
               OpSelectionMerge %110 None
               OpBranchConditional %108 %109 %110
        %109 = OpLabel
               OpReturnValue %111
        %110 = OpLabel
        %113 = OpAccessChain %95 %94 %49 %75
        %114 = OpLoad %71 %113
        %115 = OpAccessChain %95 %94 %49 %79
        %116 = OpLoad %71 %115
        %117 = OpFOrdGreaterThan %64 %114 %116
               OpSelectionMerge %119 None
               OpBranchConditional %117 %118 %119
        %118 = OpLabel
               OpBranch %58
        %119 = OpLabel
        %121 = OpAccessChain %76 %74 %75
        %122 = OpLoad %71 %121
        %123 = OpAccessChain %84 %83 %49 %49
        %124 = OpLoad %71 %123
        %125 = OpFOrdLessThan %64 %122 %124
               OpSelectionMerge %127 None
               OpBranchConditional %125 %126 %127
        %126 = OpLabel
               OpReturnValue %111
        %127 = OpLabel
        %129 = OpAccessChain %42 %66 %49
        %130 = OpLoad %6 %129
               OpStore %43 %130
               OpBranch %59
         %59 = OpLabel
        %131 = OpLoad %6 %53
        %132 = OpIAdd %6 %131 %21
               OpStore %53 %132
               OpBranch %56
         %58 = OpLabel
        %133 = OpLoad %6 %43
               OpReturnValue %133
               OpFunctionEnd
