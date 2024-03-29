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
               OpName %11 "arr"
               OpName %16 "v"
               OpName %19 "buf0"
               OpMemberName %19 0 "_GLF_uniform_int_values"
               OpName %21 ""
               OpName %28 "a"
               OpName %73 "_GLF_color"
               OpDecorate %18 ArrayStride 16
               OpMemberDecorate %19 0 Offset 0
               OpDecorate %19 Block
               OpDecorate %21 DescriptorSet 0
               OpDecorate %21 Binding 0
               OpDecorate %73 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 10
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Private %9
         %11 = OpVariable %10 Private
         %12 = OpConstant %6 1
         %13 = OpConstantComposite %9 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12
         %14 = OpTypeVector %6 2
         %15 = OpTypePointer Function %14
         %17 = OpConstant %7 3
         %18 = OpTypeArray %6 %17
         %19 = OpTypeStruct %18
         %20 = OpTypePointer Uniform %19
         %21 = OpVariable %20 Uniform
         %22 = OpConstant %6 0
         %23 = OpTypePointer Uniform %6
         %27 = OpTypePointer Function %6
         %31 = OpTypePointer Private %6
         %36 = OpTypeBool
         %42 = OpConstant %6 57678
         %45 = OpConstant %6 2
         %51 = OpConstant %7 0
         %54 = OpConstant %7 1
         %70 = OpTypeFloat 32
         %71 = OpTypeVector %70 4
         %72 = OpTypePointer Output %71
         %73 = OpVariable %72 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %16 = OpVariable %15 Function
         %28 = OpVariable %27 Function
               OpStore %11 %13
         %24 = OpAccessChain %23 %21 %22 %12
         %25 = OpLoad %6 %24
         %26 = OpCompositeConstruct %14 %25 %25
               OpStore %16 %26
               OpStore %28 %12
         %29 = OpAccessChain %23 %21 %22 %12
         %30 = OpLoad %6 %29
         %32 = OpAccessChain %31 %11 %30
         %33 = OpLoad %6 %32
         %34 = OpAccessChain %23 %21 %22 %12
         %35 = OpLoad %6 %34
         %37 = OpIEqual %36 %33 %35
               OpSelectionMerge %39 None
               OpBranchConditional %37 %38 %39
         %38 = OpLabel
         %40 = OpLoad %6 %28
         %41 = OpIAdd %6 %40 %12
               OpStore %28 %41
               OpBranch %39
         %39 = OpLabel
         %43 = OpLoad %6 %28
         %44 = OpSMod %6 %42 %43
         %46 = OpAccessChain %23 %21 %22 %45
         %47 = OpLoad %6 %46
         %48 = OpIEqual %36 %44 %47
               OpSelectionMerge %50 None
               OpBranchConditional %48 %49 %50
         %49 = OpLabel
         %52 = OpAccessChain %27 %16 %51
         %53 = OpLoad %6 %52
         %55 = OpAccessChain %27 %16 %54
         %56 = OpLoad %6 %55
         %57 = OpIAdd %6 %53 %56
         %58 = OpAccessChain %23 %21 %22 %22
         %59 = OpLoad %6 %58
         %60 = OpAccessChain %31 %11 %57
               OpStore %60 %59
               OpBranch %50
         %50 = OpLabel
         %61 = OpAccessChain %23 %21 %22 %22
         %62 = OpLoad %6 %61
         %63 = OpAccessChain %31 %11 %62
         %64 = OpLoad %6 %63
         %65 = OpAccessChain %23 %21 %22 %22
         %66 = OpLoad %6 %65
         %67 = OpIEqual %36 %64 %66
               OpSelectionMerge %69 None
               OpBranchConditional %67 %68 %87
         %68 = OpLabel
         %74 = OpAccessChain %23 %21 %22 %12
         %75 = OpLoad %6 %74
         %76 = OpConvertSToF %70 %75
         %77 = OpAccessChain %23 %21 %22 %45
         %78 = OpLoad %6 %77
         %79 = OpConvertSToF %70 %78
         %80 = OpAccessChain %23 %21 %22 %45
         %81 = OpLoad %6 %80
         %82 = OpConvertSToF %70 %81
         %83 = OpAccessChain %23 %21 %22 %12
         %84 = OpLoad %6 %83
         %85 = OpConvertSToF %70 %84
         %86 = OpCompositeConstruct %71 %76 %79 %82 %85
               OpStore %73 %86
               OpBranch %69
         %87 = OpLabel
         %88 = OpAccessChain %23 %21 %22 %45
         %89 = OpLoad %6 %88
         %90 = OpConvertSToF %70 %89
         %91 = OpCompositeConstruct %71 %90 %90 %90 %90
               OpStore %73 %91
               OpBranch %69
         %69 = OpLabel
               OpReturn
               OpFunctionEnd
