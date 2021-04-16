; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 72
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %52
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "m"
               OpName %15 "buf0"
               OpMemberName %15 0 "_GLF_uniform_int_values"
               OpName %17 ""
               OpName %52 "_GLF_color"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 0
               OpDecorate %52 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 2
          %8 = OpTypeMatrix %7 2
          %9 = OpTypePointer Function %8
         %11 = OpTypeInt 32 1
         %12 = OpTypeInt 32 0
         %13 = OpConstant %12 2
         %14 = OpTypeArray %11 %13
         %15 = OpTypeStruct %14
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpConstant %11 0
         %19 = OpTypePointer Uniform %11
         %23 = OpConstant %6 1
         %24 = OpConstant %6 0
         %37 = OpTypeBool
         %40 = OpTypeVector %37 2
         %50 = OpTypeVector %6 4
         %51 = OpTypePointer Output %50
         %52 = OpVariable %51 Output
         %56 = OpConstant %11 1
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %10 = OpVariable %9 Function
         %20 = OpAccessChain %19 %17 %18 %18
         %21 = OpLoad %11 %20
         %22 = OpConvertSToF %6 %21
         %25 = OpCompositeConstruct %7 %22 %24
         %26 = OpCompositeConstruct %7 %24 %22
         %27 = OpCompositeConstruct %8 %25 %26
         %28 = OpTranspose %8 %27
         %29 = OpTranspose %8 %28
               OpStore %10 %29
         %30 = OpLoad %8 %10
         %31 = OpAccessChain %19 %17 %18 %18
         %32 = OpLoad %11 %31
         %33 = OpConvertSToF %6 %32
         %34 = OpCompositeConstruct %7 %33 %24
         %35 = OpCompositeConstruct %7 %24 %33
         %36 = OpCompositeConstruct %8 %34 %35
         %38 = OpCompositeExtract %7 %30 0
         %39 = OpCompositeExtract %7 %36 0
         %41 = OpFOrdEqual %40 %38 %39
         %42 = OpAll %37 %41
         %43 = OpCompositeExtract %7 %30 1
         %44 = OpCompositeExtract %7 %36 1
         %45 = OpFOrdEqual %40 %43 %44
         %46 = OpAll %37 %45
         %47 = OpLogicalAnd %37 %42 %46
               OpSelectionMerge %49 None
               OpBranchConditional %47 %48 %67
         %48 = OpLabel
         %53 = OpAccessChain %19 %17 %18 %18
         %54 = OpLoad %11 %53
         %55 = OpConvertSToF %6 %54
         %57 = OpAccessChain %19 %17 %18 %56
         %58 = OpLoad %11 %57
         %59 = OpConvertSToF %6 %58
         %60 = OpAccessChain %19 %17 %18 %56
         %61 = OpLoad %11 %60
         %62 = OpConvertSToF %6 %61
         %63 = OpAccessChain %19 %17 %18 %18
         %64 = OpLoad %11 %63
         %65 = OpConvertSToF %6 %64
         %66 = OpCompositeConstruct %50 %55 %59 %62 %65
               OpStore %52 %66
               OpBranch %49
         %67 = OpLabel
         %68 = OpAccessChain %19 %17 %18 %56
         %69 = OpLoad %11 %68
         %70 = OpConvertSToF %6 %69
         %71 = OpCompositeConstruct %50 %70 %70 %70 %70
               OpStore %52 %71
               OpBranch %49
         %49 = OpLabel
               OpReturn
               OpFunctionEnd
