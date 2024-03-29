; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 108
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %52 %84
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %13 "v"
               OpName %16 "i"
               OpName %27 "j"
               OpName %40 "buf0"
               OpMemberName %40 0 "_GLF_uniform_float_values"
               OpName %42 ""
               OpName %52 "gl_FragCoord"
               OpName %84 "_GLF_color"
               OpName %86 "buf1"
               OpMemberName %86 0 "_GLF_uniform_int_values"
               OpName %88 ""
               OpDecorate %39 ArrayStride 16
               OpMemberDecorate %40 0 Offset 0
               OpDecorate %40 Block
               OpDecorate %42 DescriptorSet 0
               OpDecorate %42 Binding 0
               OpDecorate %52 BuiltIn FragCoord
               OpDecorate %84 Location 0
               OpDecorate %85 ArrayStride 16
               OpMemberDecorate %86 0 Offset 0
               OpDecorate %86 Block
               OpDecorate %88 DescriptorSet 0
               OpDecorate %88 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 3
         %10 = OpTypeFloat 32
         %11 = OpTypeVector %10 4
         %12 = OpTypePointer Function %11
         %14 = OpConstant %10 1
         %15 = OpConstantComposite %11 %14 %14 %14 %14
         %24 = OpConstant %6 0
         %25 = OpTypeBool
         %37 = OpTypeInt 32 0
         %38 = OpConstant %37 2
         %39 = OpTypeArray %10 %38
         %40 = OpTypeStruct %39
         %41 = OpTypePointer Uniform %40
         %42 = OpVariable %41 Uniform
         %43 = OpTypePointer Uniform %10
         %46 = OpTypePointer Function %10
         %51 = OpTypePointer Input %11
         %52 = OpVariable %51 Input
         %53 = OpConstant %37 0
         %54 = OpTypePointer Input %10
         %57 = OpConstant %6 1
         %72 = OpConstant %6 7
         %75 = OpConstant %10 0
         %76 = OpConstantComposite %11 %75 %75 %75 %75
         %77 = OpTypeVector %25 4
         %83 = OpTypePointer Output %11
         %84 = OpVariable %83 Output
         %85 = OpTypeArray %6 %38
         %86 = OpTypeStruct %85
         %87 = OpTypePointer Uniform %86
         %88 = OpVariable %87 Uniform
         %89 = OpTypePointer Uniform %6
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %13 = OpVariable %12 Function
         %16 = OpVariable %7 Function
         %27 = OpVariable %7 Function
               OpStore %8 %9
               OpStore %13 %15
         %17 = OpLoad %6 %8
               OpStore %16 %17
               OpBranch %18
         %18 = OpLabel
               OpLoopMerge %20 %21 None
               OpBranch %22
         %22 = OpLabel
         %23 = OpLoad %6 %16
         %26 = OpSGreaterThanEqual %25 %23 %24
               OpBranchConditional %26 %19 %20
         %19 = OpLabel
         %28 = OpLoad %6 %8
               OpStore %27 %28
               OpBranch %29
         %29 = OpLabel
               OpLoopMerge %31 %32 None
               OpBranch %33
         %33 = OpLabel
         %34 = OpLoad %6 %27
         %35 = OpSGreaterThanEqual %25 %34 %24
               OpBranchConditional %35 %30 %31
         %30 = OpLabel
         %36 = OpLoad %6 %16
         %44 = OpAccessChain %43 %42 %24 %24
         %45 = OpLoad %10 %44
         %47 = OpAccessChain %46 %13 %36
         %48 = OpLoad %10 %47
         %49 = OpFSub %10 %48 %45
         %50 = OpAccessChain %46 %13 %36
               OpStore %50 %49
         %55 = OpAccessChain %54 %52 %53
         %56 = OpLoad %10 %55
         %58 = OpAccessChain %43 %42 %24 %57
         %59 = OpLoad %10 %58
         %60 = OpFOrdLessThan %25 %56 %59
               OpSelectionMerge %62 None
               OpBranchConditional %60 %61 %62
         %61 = OpLabel
               OpBranch %32
         %62 = OpLabel
         %64 = OpLoad %6 %8
         %65 = OpIAdd %6 %64 %57
               OpStore %8 %65
               OpBranch %31
         %32 = OpLabel
         %67 = OpLoad %6 %27
         %68 = OpISub %6 %67 %57
               OpStore %27 %68
               OpBranch %29
         %31 = OpLabel
               OpBranch %21
         %21 = OpLabel
         %69 = OpLoad %6 %16
         %70 = OpISub %6 %69 %57
               OpStore %16 %70
               OpBranch %18
         %20 = OpLabel
         %71 = OpLoad %6 %8
         %73 = OpIEqual %25 %71 %72
         %74 = OpLoad %11 %13
         %78 = OpFOrdEqual %77 %74 %76
         %79 = OpAll %25 %78
         %80 = OpLogicalAnd %25 %73 %79
               OpSelectionMerge %82 None
               OpBranchConditional %80 %81 %103
         %81 = OpLabel
         %90 = OpAccessChain %89 %88 %24 %24
         %91 = OpLoad %6 %90
         %92 = OpConvertSToF %10 %91
         %93 = OpAccessChain %89 %88 %24 %57
         %94 = OpLoad %6 %93
         %95 = OpConvertSToF %10 %94
         %96 = OpAccessChain %89 %88 %24 %57
         %97 = OpLoad %6 %96
         %98 = OpConvertSToF %10 %97
         %99 = OpAccessChain %89 %88 %24 %24
        %100 = OpLoad %6 %99
        %101 = OpConvertSToF %10 %100
        %102 = OpCompositeConstruct %11 %92 %95 %98 %101
               OpStore %84 %102
               OpBranch %82
        %103 = OpLabel
        %104 = OpAccessChain %89 %88 %24 %57
        %105 = OpLoad %6 %104
        %106 = OpConvertSToF %10 %105
        %107 = OpCompositeConstruct %11 %106 %106 %106 %106
               OpStore %84 %107
               OpBranch %82
         %82 = OpLabel
               OpReturn
               OpFunctionEnd
