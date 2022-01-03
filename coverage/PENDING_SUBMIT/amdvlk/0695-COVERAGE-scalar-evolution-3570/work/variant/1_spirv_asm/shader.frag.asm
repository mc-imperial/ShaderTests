; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 92
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %73
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "func("
               OpName %18 "i"
               OpName %19 "buf1"
               OpMemberName %19 0 "two"
               OpName %21 ""
               OpName %38 "buf0"
               OpMemberName %38 0 "_GLF_uniform_int_values"
               OpName %40 ""
               OpName %53 "a"
               OpName %73 "_GLF_color"
               OpMemberDecorate %19 0 Offset 0
               OpDecorate %19 Block
               OpDecorate %21 DescriptorSet 0
               OpDecorate %21 Binding 1
               OpDecorate %37 ArrayStride 16
               OpMemberDecorate %38 0 Offset 0
               OpDecorate %38 Block
               OpDecorate %40 DescriptorSet 0
               OpDecorate %40 Binding 0
               OpDecorate %73 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeFunction %6
         %15 = OpTypeBool
         %16 = OpConstantTrue %15
         %17 = OpTypePointer Function %6
         %19 = OpTypeStruct %6
         %20 = OpTypePointer Uniform %19
         %21 = OpVariable %20 Uniform
         %22 = OpConstant %6 0
         %23 = OpTypePointer Uniform %6
         %35 = OpTypeInt 32 0
         %36 = OpConstant %35 2
         %37 = OpTypeArray %6 %36
         %38 = OpTypeStruct %37
         %39 = OpTypePointer Uniform %38
         %40 = OpVariable %39 Uniform
         %50 = OpConstant %6 1
         %70 = OpTypeFloat 32
         %71 = OpTypeVector %70 4
         %72 = OpTypePointer Output %71
         %73 = OpVariable %72 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %53 = OpVariable %17 Function
         %54 = OpAccessChain %23 %40 %22 %50
         %55 = OpLoad %6 %54
               OpStore %53 %55
         %56 = OpAccessChain %23 %21 %22
         %57 = OpLoad %6 %56
         %58 = OpAccessChain %23 %40 %22 %22
         %59 = OpLoad %6 %58
         %60 = OpSGreaterThan %15 %57 %59
               OpSelectionMerge %62 None
               OpBranchConditional %60 %61 %62
         %61 = OpLabel
         %63 = OpFunctionCall %6 %8
               OpStore %53 %63
               OpBranch %62
         %62 = OpLabel
         %64 = OpLoad %6 %53
         %65 = OpAccessChain %23 %40 %22 %22
         %66 = OpLoad %6 %65
         %67 = OpIEqual %15 %64 %66
               OpSelectionMerge %69 None
               OpBranchConditional %67 %68 %87
         %68 = OpLabel
         %74 = OpAccessChain %23 %40 %22 %22
         %75 = OpLoad %6 %74
         %76 = OpConvertSToF %70 %75
         %77 = OpAccessChain %23 %40 %22 %50
         %78 = OpLoad %6 %77
         %79 = OpConvertSToF %70 %78
         %80 = OpAccessChain %23 %40 %22 %50
         %81 = OpLoad %6 %80
         %82 = OpConvertSToF %70 %81
         %83 = OpAccessChain %23 %40 %22 %22
         %84 = OpLoad %6 %83
         %85 = OpConvertSToF %70 %84
         %86 = OpCompositeConstruct %71 %76 %79 %82 %85
               OpStore %73 %86
               OpBranch %69
         %87 = OpLabel
         %88 = OpAccessChain %23 %40 %22 %50
         %89 = OpLoad %6 %88
         %90 = OpConvertSToF %70 %89
         %91 = OpCompositeConstruct %71 %90 %90 %90 %90
               OpStore %73 %91
               OpBranch %69
         %69 = OpLabel
               OpReturn
               OpFunctionEnd
          %8 = OpFunction %6 None %7
          %9 = OpLabel
         %18 = OpVariable %17 Function
               OpBranch %10
         %10 = OpLabel
               OpLoopMerge %12 %13 None
               OpBranch %14
         %14 = OpLabel
               OpBranchConditional %16 %11 %12
         %11 = OpLabel
         %24 = OpAccessChain %23 %21 %22
         %25 = OpLoad %6 %24
               OpStore %18 %25
               OpBranch %26
         %26 = OpLabel
               OpLoopMerge %28 %29 None
               OpBranch %30
         %30 = OpLabel
         %31 = OpLoad %6 %18
         %32 = OpSGreaterThan %15 %31 %22
               OpBranchConditional %32 %27 %28
         %27 = OpLabel
         %33 = OpAccessChain %23 %21 %22
         %34 = OpLoad %6 %33
         %41 = OpAccessChain %23 %40 %22 %22
         %42 = OpLoad %6 %41
         %43 = OpSGreaterThan %15 %34 %42
               OpSelectionMerge %45 None
               OpBranchConditional %43 %44 %45
         %44 = OpLabel
         %46 = OpAccessChain %23 %40 %22 %22
         %47 = OpLoad %6 %46
               OpReturnValue %47
         %45 = OpLabel
               OpBranch %29
         %29 = OpLabel
         %49 = OpLoad %6 %18
         %51 = OpISub %6 %49 %50
               OpStore %18 %51
               OpBranch %26
         %28 = OpLabel
               OpBranch %13
         %13 = OpLabel
               OpBranch %10
         %12 = OpLabel
         %52 = OpUndef %6
               OpReturnValue %52
               OpFunctionEnd
