; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 119
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %100
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "func("
               OpName %12 "v"
               OpName %17 "buf1"
               OpMemberName %17 0 "_GLF_uniform_int_values"
               OpName %19 ""
               OpName %28 "i"
               OpName %38 "buf0"
               OpMemberName %38 0 "_GLF_uniform_float_values"
               OpName %40 ""
               OpName %58 "v"
               OpName %63 "buf2"
               OpMemberName %63 0 "one"
               OpName %65 ""
               OpName %100 "_GLF_color"
               OpDecorate %16 ArrayStride 16
               OpMemberDecorate %17 0 Offset 0
               OpDecorate %17 Block
               OpDecorate %19 DescriptorSet 0
               OpDecorate %19 Binding 1
               OpDecorate %37 ArrayStride 16
               OpMemberDecorate %38 0 Offset 0
               OpDecorate %38 Block
               OpDecorate %40 DescriptorSet 0
               OpDecorate %40 Binding 0
               OpMemberDecorate %63 0 Offset 0
               OpDecorate %63 Block
               OpDecorate %65 DescriptorSet 0
               OpDecorate %65 Binding 2
               OpDecorate %100 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypeFunction %7
         %11 = OpTypePointer Function %7
         %13 = OpTypeInt 32 1
         %14 = OpTypeInt 32 0
         %15 = OpConstant %14 3
         %16 = OpTypeArray %13 %15
         %17 = OpTypeStruct %16
         %18 = OpTypePointer Uniform %17
         %19 = OpVariable %18 Uniform
         %20 = OpConstant %13 0
         %21 = OpConstant %13 1
         %22 = OpTypePointer Uniform %13
         %27 = OpTypePointer Function %13
         %36 = OpConstant %14 1
         %37 = OpTypeArray %6 %36
         %38 = OpTypeStruct %37
         %39 = OpTypePointer Uniform %38
         %40 = OpVariable %39 Uniform
         %41 = OpTypePointer Uniform %6
         %44 = OpTypePointer Function %6
         %53 = OpTypeBool
         %63 = OpTypeStruct %13
         %64 = OpTypePointer Uniform %63
         %65 = OpVariable %64 Uniform
         %83 = OpConstant %13 2
         %94 = OpTypeVector %53 4
         %99 = OpTypePointer Output %7
        %100 = OpVariable %99 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %58 = OpVariable %11 Function
         %59 = OpAccessChain %22 %19 %20 %21
         %60 = OpLoad %13 %59
         %61 = OpConvertSToF %6 %60
         %62 = OpCompositeConstruct %7 %61 %61 %61 %61
               OpStore %58 %62
         %66 = OpAccessChain %22 %65 %20
         %67 = OpLoad %13 %66
         %68 = OpAccessChain %22 %19 %20 %21
         %69 = OpLoad %13 %68
         %70 = OpSGreaterThan %53 %67 %69
               OpSelectionMerge %72 None
               OpBranchConditional %70 %71 %72
         %71 = OpLabel
         %73 = OpLoad %7 %58
         %74 = OpFunctionCall %7 %9
         %75 = OpFAdd %7 %73 %74
               OpStore %58 %75
               OpBranch %72
         %72 = OpLabel
         %76 = OpLoad %7 %58
         %77 = OpFunctionCall %7 %9
         %78 = OpFAdd %7 %76 %77
               OpStore %58 %78
         %79 = OpLoad %7 %58
         %80 = OpAccessChain %22 %19 %20 %21
         %81 = OpLoad %13 %80
         %82 = OpConvertSToF %6 %81
         %84 = OpAccessChain %22 %19 %20 %83
         %85 = OpLoad %13 %84
         %86 = OpConvertSToF %6 %85
         %87 = OpAccessChain %22 %19 %20 %21
         %88 = OpLoad %13 %87
         %89 = OpConvertSToF %6 %88
         %90 = OpAccessChain %22 %19 %20 %21
         %91 = OpLoad %13 %90
         %92 = OpConvertSToF %6 %91
         %93 = OpCompositeConstruct %7 %82 %86 %89 %92
         %95 = OpFOrdEqual %94 %79 %93
         %96 = OpAll %53 %95
               OpSelectionMerge %98 None
               OpBranchConditional %96 %97 %114
         %97 = OpLabel
        %101 = OpAccessChain %22 %19 %20 %20
        %102 = OpLoad %13 %101
        %103 = OpConvertSToF %6 %102
        %104 = OpAccessChain %22 %19 %20 %21
        %105 = OpLoad %13 %104
        %106 = OpConvertSToF %6 %105
        %107 = OpAccessChain %22 %19 %20 %21
        %108 = OpLoad %13 %107
        %109 = OpConvertSToF %6 %108
        %110 = OpAccessChain %22 %19 %20 %20
        %111 = OpLoad %13 %110
        %112 = OpConvertSToF %6 %111
        %113 = OpCompositeConstruct %7 %103 %106 %109 %112
               OpStore %100 %113
               OpBranch %98
        %114 = OpLabel
        %115 = OpAccessChain %22 %19 %20 %21
        %116 = OpLoad %13 %115
        %117 = OpConvertSToF %6 %116
        %118 = OpCompositeConstruct %7 %117 %117 %117 %117
               OpStore %100 %118
               OpBranch %98
         %98 = OpLabel
               OpReturn
               OpFunctionEnd
          %9 = OpFunction %7 None %8
         %10 = OpLabel
         %12 = OpVariable %11 Function
         %28 = OpVariable %27 Function
         %23 = OpAccessChain %22 %19 %20 %21
         %24 = OpLoad %13 %23
         %25 = OpConvertSToF %6 %24
         %26 = OpCompositeConstruct %7 %25 %25 %25 %25
               OpStore %12 %26
         %29 = OpAccessChain %22 %19 %20 %20
         %30 = OpLoad %13 %29
               OpStore %28 %30
               OpBranch %31
         %31 = OpLabel
               OpLoopMerge %33 %34 None
               OpBranch %32
         %32 = OpLabel
         %35 = OpLoad %13 %28
         %42 = OpAccessChain %41 %40 %20 %20
         %43 = OpLoad %6 %42
         %45 = OpAccessChain %44 %12 %35
               OpStore %45 %43
         %46 = OpLoad %13 %28
         %47 = OpIAdd %13 %46 %21
               OpStore %28 %47
               OpBranch %34
         %34 = OpLabel
         %48 = OpAccessChain %22 %19 %20 %20
         %49 = OpLoad %13 %48
         %50 = OpExtInst %13 %1 FindSMsb %49
         %51 = OpAccessChain %22 %19 %20 %20
         %52 = OpLoad %13 %51
         %54 = OpSGreaterThan %53 %50 %52
               OpBranchConditional %54 %31 %33
         %33 = OpLabel
         %55 = OpLoad %7 %12
               OpReturnValue %55
               OpFunctionEnd
